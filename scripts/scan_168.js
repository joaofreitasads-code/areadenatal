import https from 'https';
import fs from 'fs';

function fetchFolderHtml(folderId) {
  return new Promise((resolve) => {
    const url = `https://drive.google.com/drive/folders/${folderId}`;
    https.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", () => resolve(""));
  });
}

function findImagesInHtml(html) {
  const images = [];
  // Match aria-label="filename.ext ...
  const regex = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp|gif|bmp))[^"]*"[^>]*?ssk=[\x27"][^:]*:[^:]*:([a-zA-Z0-9_\-]{25,})/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const filename = m[1];
    const fileId = m[2];
    images.push({ filename, fileId });
  }

  // Also check general Drive filename format in JSON
  const regex2 = /\["([a-zA-Z0-9_\-]{25,})","([^"]+?\.(?:jpg|jpeg|png|webp))"/gi;
  while ((m = regex2.exec(html)) !== null) {
    if (!images.find(x => x.fileId === m[1])) {
      images.push({ filename: m[2], fileId: m[1] });
    }
  }

  // Check any files at all
  const fileRegex = /aria-label="([^"]+?\.(?:stl|3mf|zip|rar|obj|lys))[^"]*"[^>]*?ssk=[\x27"][^:]*:[^:]*:([a-zA-Z0-9_\-]{25,})/gi;
  const otherFiles = [];
  while ((m = fileRegex.exec(html)) !== null) {
    otherFiles.push({ filename: m[1], fileId: m[2] });
  }

  return { images, otherFiles };
}

// Read driveModels.ts
const content = fs.readFileSync("./src/data/driveModels.ts", "utf8");
const start = content.indexOf("= [") + 2;
const end = content.indexOf("];\n\nexport const CHRISTMAS_CATEGORIES") + 1;
const arrayText = content.slice(start, end);
const allModels = JSON.parse(arrayText);
const noImgModels = allModels.filter(m => m.hasRealCover === false);

console.log("Total models without real cover in database:", noImgModels.length);

async function run() {
  const foundImages = [];
  const details = [];
  const batchSize = 12;

  for (let i = 0; i < noImgModels.length; i += batchSize) {
    const batch = noImgModels.slice(i, i + batchSize);
    await Promise.all(batch.map(async (m) => {
      const folderId = m.id;
      const html = await fetchFolderHtml(folderId);
      const { images, otherFiles } = findImagesInHtml(html);
      
      details.push({
        id: m.id,
        number: m.number,
        title: m.title,
        folderUrl: m.driveFolderUrl,
        images,
        otherFilesCount: otherFiles.length,
        otherFilesSample: otherFiles.slice(0, 3).map(f => f.filename)
      });

      if (images.length > 0) {
        console.log(`>>> [FOUND IMAGE!] #${m.number} "${m.title}":`, images.map(img => img.filename).join(', '));
        foundImages.push({
          number: m.number,
          title: m.title,
          folderId: m.id,
          images
        });
      }
    }));
    console.log(`Checked ${Math.min(i + batchSize, noImgModels.length)}/${noImgModels.length}...`);
  }

  console.log("\n=================================");
  console.log(`SCAN COMPLETE!`);
  console.log(`Folders checked: ${noImgModels.length}`);
  console.log(`Folders with images found inside Google Drive: ${foundImages.length}`);
  console.log(`Folders with NO image inside Google Drive: ${noImgModels.length - foundImages.length}`);
  
  fs.writeFileSync('./scripts/scan_results.json', JSON.stringify({ foundImages, details }, null, 2));
}

run();
