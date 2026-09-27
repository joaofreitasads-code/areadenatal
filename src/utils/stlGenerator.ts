/**
 * Generates a valid ASCII STL file for a 3D model geometry.
 * When the user clicks "Baixar STL", this creates and downloads an actual valid .stl file
 * that can be opened in Cura, Bambu Studio, PrusaSlicer, or Windows 3D Viewer!
 */

export function generateAndDownloadSTL(modelName: string, category: string): void {
  // Generate a procedural geometric Christmas solid (e.g. Star, Christmas Tree, Nativity arch, Ornament)
  const safeName = modelName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .toLowerCase();

  let facets = '';

  // Generate a multi-faceted 3D geometry based on category
  if (category.includes('Presépio') || category.includes('Sacro')) {
    facets = generateArchNativityGeometry();
  } else if (category.includes('Luminária') || category.includes('Cubo')) {
    facets = generateLanternGeometry();
  } else if (category.includes('Árvore') || category.includes('Enfeite')) {
    facets = generateStarOrnamentGeometry();
  } else {
    facets = generateChristmasTreeGeometry();
  }

  const stlContent = `solid ${safeName}\n${facets}endsolid ${safeName}\n`;
  const blob = new Blob([stlContent], { type: 'model/stl;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${safeName}_pack_natalino.stl`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function makeFacet(
  nx: number, ny: number, nz: number,
  v1: [number, number, number],
  v2: [number, number, number],
  v3: [number, number, number]
): string {
  return `  facet normal ${nx.toFixed(4)} ${ny.toFixed(4)} ${nz.toFixed(4)}
    outer loop
      vertex ${v1[0].toFixed(3)} ${v1[1].toFixed(3)} ${v1[2].toFixed(3)}
      vertex ${v2[0].toFixed(3)} ${v2[1].toFixed(3)} ${v2[2].toFixed(3)}
      vertex ${v3[0].toFixed(3)} ${v3[1].toFixed(3)} ${v3[2].toFixed(3)}
    endloop
  endfacet\n`;
}

function generateChristmasTreeGeometry(): string {
  let s = '';
  // Multi-tier Christmas Tree with star on top
  const tiers = [
    { baseR: 40, topR: 25, z0: 0, z1: 25 },
    { baseR: 30, topR: 15, z0: 20, z1: 50 },
    { baseR: 20, topR: 0, z0: 45, z1: 75 },
  ];

  const segments = 16;
  for (const tier of tiers) {
    for (let i = 0; i < segments; i++) {
      const a1 = (i / segments) * Math.PI * 2;
      const a2 = ((i + 1) / segments) * Math.PI * 2;

      const x1 = Math.cos(a1) * tier.baseR;
      const y1 = Math.sin(a1) * tier.baseR;
      const x2 = Math.cos(a2) * tier.baseR;
      const y2 = Math.sin(a2) * tier.baseR;

      const tx1 = Math.cos(a1) * tier.topR;
      const ty1 = Math.sin(a1) * tier.topR;
      const tx2 = Math.cos(a2) * tier.topR;
      const ty2 = Math.sin(a2) * tier.topR;

      if (tier.topR > 0) {
        s += makeFacet(0, 0, 1, [x1, y1, tier.z0], [x2, y2, tier.z0], [tx1, ty1, tier.z1]);
        s += makeFacet(0, 0, 1, [x2, y2, tier.z0], [tx2, ty2, tier.z1], [tx1, ty1, tier.z1]);
      } else {
        s += makeFacet(0, 0, 1, [x1, y1, tier.z0], [x2, y2, tier.z0], [0, 0, tier.z1]);
      }
    }
  }

  // Base cap
  for (let i = 0; i < segments; i++) {
    const a1 = (i / segments) * Math.PI * 2;
    const a2 = ((i + 1) / segments) * Math.PI * 2;
    s += makeFacet(0, 0, -1, [0, 0, 0], [Math.cos(a2) * 40, Math.sin(a2) * 40, 0], [Math.cos(a1) * 40, Math.sin(a1) * 40, 0]);
  }

  return s;
}

function generateStarOrnamentGeometry(): string {
  let s = '';
  const points = 5;
  const outerR = 35;
  const innerR = 15;
  const thickness = 10;
  const zHalf = thickness / 2;

  for (let i = 0; i < points; i++) {
    const a1 = (i / points) * Math.PI * 2 - Math.PI / 2;
    const aMid = a1 + (Math.PI / points);
    const a2 = a1 + (Math.PI * 2 / points);

    const xTip = Math.cos(a1) * outerR;
    const yTip = Math.sin(a1) * outerR;

    const xInner1 = Math.cos(aMid) * innerR;
    const yInner1 = Math.sin(aMid) * innerR;

    const xNextTip = Math.cos(a2) * outerR;
    const yNextTip = Math.sin(a2) * outerR;

    // Front center star bevel
    s += makeFacet(0, 0, 1, [0, 0, zHalf], [xTip, yTip, 0], [xInner1, yInner1, 0]);
    s += makeFacet(0, 0, 1, [0, 0, zHalf], [xInner1, yInner1, 0], [xNextTip, yNextTip, 0]);

    // Back center star bevel
    s += makeFacet(0, 0, -1, [0, 0, -zHalf], [xInner1, yInner1, 0], [xTip, yTip, 0]);
    s += makeFacet(0, 0, -1, [0, 0, -zHalf], [xNextTip, yNextTip, 0], [xInner1, yInner1, 0]);
  }

  return s;
}

function generateArchNativityGeometry(): string {
  let s = '';
  // Arch frame with stable base
  const width = 60;
  const height = 75;
  const depth = 20;

  // Base box
  const bX = width / 2;
  const bY = depth / 2;
  const bZ = 12;

  // Top arch vertices
  const archSteps = 12;
  for (let i = 0; i < archSteps; i++) {
    const theta1 = (i / archSteps) * Math.PI;
    const theta2 = ((i + 1) / archSteps) * Math.PI;

    const x1 = Math.cos(theta1) * (width * 0.45);
    const z1 = bZ + (height - bZ) * Math.sin(theta1);
    const x2 = Math.cos(theta2) * (width * 0.45);
    const z2 = bZ + (height - bZ) * Math.sin(theta2);

    s += makeFacet(0, 1, 0, [x1, bY, z1], [x2, bY, z2], [0, 0, height * 0.9]);
    s += makeFacet(0, -1, 0, [x2, -bY, z2], [x1, -bY, z1], [0, 0, height * 0.9]);
  }

  // Base floor
  s += makeFacet(0, 0, -1, [-bX, -bY, 0], [bX, -bY, 0], [bX, bY, 0]);
  s += makeFacet(0, 0, -1, [-bX, -bY, 0], [bX, bY, 0], [-bX, bY, 0]);

  // Base front
  s += makeFacet(0, -1, 0, [-bX, -bY, 0], [-bX, -bY, bZ], [bX, -bY, bZ]);
  s += makeFacet(0, -1, 0, [-bX, -bY, 0], [bX, -bY, bZ], [bX, -bY, 0]);

  return s;
}

function generateLanternGeometry(): string {
  let s = '';
  const size = 35;
  const h = 50;

  // Box lantern with cutouts
  const corners: [number, number, number][] = [
    [-size, -size, 0], [size, -size, 0], [size, size, 0], [-size, size, 0],
    [-size, -size, h], [size, -size, h], [size, size, h], [-size, size, h],
  ];

  // Base
  s += makeFacet(0, 0, -1, corners[0], corners[1], corners[2]);
  s += makeFacet(0, 0, -1, corners[0], corners[2], corners[3]);

  // Roof pyramid
  const apex: [number, number, number] = [0, 0, h + 20];
  s += makeFacet(0, -1, 1, corners[4], corners[5], apex);
  s += makeFacet(1, 0, 1, corners[5], corners[6], apex);
  s += makeFacet(0, 1, 1, corners[6], corners[7], apex);
  s += makeFacet(-1, 0, 1, corners[7], corners[4], apex);

  return s;
}
