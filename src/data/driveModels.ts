/**
 * Acervo Oficial com os 220 Modelos Natalinos do Pack Natal
 * Todos os modelos contam com fotos reais de alta qualidade e links diretos para os arquivos STL
 */

export interface DriveModelFile {
  id: string;
  name: string;
  downloadUrl: string;
}

export interface DriveModelSpecs {
  weightGrams: number;
  printTimeHours: number;
  filament: string;
  infill: string;
  supports: string;
  layerHeight: string;
  nozzle: string;
}

export interface ChristmasModel {
  id: string;
  number: number;
  folderName: string;
  title: string;
  category: "papai_noel" | "arvores" | "renas" | "luminarias" | "presepios" | "utilidades";
  categoryLabel: string;
  tagType: string;
  imageUrl: string;
  additionalImages: string[];
  files: DriveModelFile[];
  driveFolderUrl: string;
  hasRealCover?: boolean;
  specs: DriveModelSpecs;
  downloadsCount: number;
  isNew: boolean;
  description: string;
}

export const CHRISTMAS_MODELS: ChristmasModel[] = [
  {
    "id": "19b6_vTVDdjTgoON5TqgoFOkINvQj34DM",
    "number": 1,
    "folderName": "Anjo Anya",
    "title": "Anjo Anya",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Presépio",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/19b6_vTVDdjTgoON5TqgoFOkINvQj34DM.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/19b6_vTVDdjTgoON5TqgoFOkINvQj34DM.jpg"
    ],
    "files": [
      {
        "id": "19b6_vTVDdjTgoON5TqgoFOkINvQj34DM",
        "name": "Anjo Anya.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/19b6_vTVDdjTgoON5TqgoFOkINvQj34DM"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/19b6_vTVDdjTgoON5TqgoFOkINvQj34DM",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 68,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2774,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE",
    "number": 2,
    "folderName": "Árvore de Natal",
    "title": "Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE.jpeg"
    ],
    "files": [
      {
        "id": "1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE",
        "name": "Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uKH75GbO9wAEJGVdakZNqRrGD-Hg7xPE",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 115,
      "printTimeHours": 5.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4486,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1dWTbxonAtK3JhSyb88s32bOP_G88W2hf",
    "number": 3,
    "folderName": "Árvore de Natal (4)",
    "title": "Árvore de Natal (4)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dWTbxonAtK3JhSyb88s32bOP_G88W2hf.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dWTbxonAtK3JhSyb88s32bOP_G88W2hf.jpg"
    ],
    "files": [
      {
        "id": "1dWTbxonAtK3JhSyb88s32bOP_G88W2hf",
        "name": "Árvore de Natal (4).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1dWTbxonAtK3JhSyb88s32bOP_G88W2hf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dWTbxonAtK3JhSyb88s32bOP_G88W2hf",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 49,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4143,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH",
    "number": 4,
    "folderName": "Árvore de Natal (5)",
    "title": "Árvore de Natal (5)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH.jpeg"
    ],
    "files": [
      {
        "id": "1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH",
        "name": "Árvore de Natal (5).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Lo3oIxIloYr3ypdmsewx_rPnj8Rtg5RH",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 52,
      "printTimeHours": 7.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2546,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6",
    "number": 5,
    "folderName": "Árvore de Natal (7)",
    "title": "Árvore de Natal (7)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6.jpeg"
    ],
    "files": [
      {
        "id": "1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6",
        "name": "Árvore de Natal (7).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1DOIGpzgWh9kX_g-wT5PH2_Jv4pCwwVF6",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 63,
      "printTimeHours": 5.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6457,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle",
    "number": 6,
    "folderName": "Árvore de Natal 4",
    "title": "Árvore de Natal 4",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle.jpg"
    ],
    "files": [
      {
        "id": "100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle",
        "name": "Árvore de Natal 4.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/100aAVyDeGFfS-4yMRWYfO6KkRidA7Fle",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 75,
      "printTimeHours": 3.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2650,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF",
    "number": 7,
    "folderName": "Árvore de Natal 6",
    "title": "Árvore de Natal 6",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF.jpg"
    ],
    "files": [
      {
        "id": "11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF",
        "name": "Árvore de Natal 6.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11RrqPxdv52xOfg_z9cTXJT4dDi0Pz7GF",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 60,
      "printTimeHours": 3.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3510,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy",
    "number": 8,
    "folderName": "Árvore de Natal 10",
    "title": "Árvore de Natal 10",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy.jpg"
    ],
    "files": [
      {
        "id": "1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy",
        "name": "Árvore de Natal 10.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1fhi2zl4I0_v4FNCP3kBIYNek_fnr6BKy",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 84,
      "printTimeHours": 6.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3316,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1rJFwmptJ0cavVU5MduQnevYXGA636hgN",
    "number": 9,
    "folderName": "Árvore de Natal 11",
    "title": "Árvore de Natal 11",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rJFwmptJ0cavVU5MduQnevYXGA636hgN.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rJFwmptJ0cavVU5MduQnevYXGA636hgN.jpg"
    ],
    "files": [
      {
        "id": "1rJFwmptJ0cavVU5MduQnevYXGA636hgN",
        "name": "Árvore de Natal 11.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1rJFwmptJ0cavVU5MduQnevYXGA636hgN"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rJFwmptJ0cavVU5MduQnevYXGA636hgN",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 70,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3230,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N",
    "number": 10,
    "folderName": "Árvore de Natal 16",
    "title": "Árvore de Natal 16",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N.jpg"
    ],
    "files": [
      {
        "id": "1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N",
        "name": "Árvore de Natal 16.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1eU72DbXrfB04WiUvIb3Y7C5iZm-3kr0N",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 82,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4375,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d",
    "number": 11,
    "folderName": "Árvore de Natal 17",
    "title": "Árvore de Natal 17",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d.jpg"
    ],
    "files": [
      {
        "id": "13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d",
        "name": "Árvore de Natal 17.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/13hWBhqWFg9V14e1f1GrvH0BCFXS6zQ8d",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 127,
      "printTimeHours": 7.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5998,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4",
    "number": 12,
    "folderName": "Árvore de Natal 18",
    "title": "Árvore de Natal 18",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4.jpg"
    ],
    "files": [
      {
        "id": "1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4",
        "name": "Árvore de Natal 18.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NSm7WcBSmFzoJthnHnn4bIDat2eHT8k4",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 96,
      "printTimeHours": 7.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2508,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI",
    "number": 13,
    "folderName": "Árvore de Natal 21",
    "title": "Árvore de Natal 21",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI.jpg"
    ],
    "files": [
      {
        "id": "1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI",
        "name": "Árvore de Natal 21.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1o0R9PYDNZQPSIyi6eVfB89rgq7kopqqI",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 89,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5827,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk",
    "number": 14,
    "folderName": "Árvore de Natal 23",
    "title": "Árvore de Natal 23",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk.jpg"
    ],
    "files": [
      {
        "id": "1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk",
        "name": "Árvore de Natal 23.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JsFUUU6y8a9lPA-5C2rSlgf1rqqZ6Fnk",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 101,
      "printTimeHours": 4.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6278,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q",
    "number": 15,
    "folderName": "Árvore de Natal 24",
    "title": "Árvore de Natal 24",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q.jpg"
    ],
    "files": [
      {
        "id": "1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q",
        "name": "Árvore de Natal 24.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NL3i7MaHnsgkAsTL2CKiAVa0lfwqwG-Q",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 93,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4270,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn",
    "number": 16,
    "folderName": "Árvore de Natal com Pernas",
    "title": "Árvore de Natal com Pernas",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn.jpeg"
    ],
    "files": [
      {
        "id": "1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn",
        "name": "Árvore de Natal com Pernas.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ADQZ4RYwlRmI8VZyako05uLYWGm5P7tn",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 86,
      "printTimeHours": 2.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4512,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO",
    "number": 17,
    "folderName": "Árvore de Natal de Halteres (2)",
    "title": "Árvore de Natal de Halteres (2)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO.jpeg"
    ],
    "files": [
      {
        "id": "1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO",
        "name": "Árvore de Natal de Halteres (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1-bnZOiKHw3HDvd2_JKz9wSZIWMiDLakO",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 7.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3366,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm",
    "number": 18,
    "folderName": "Árvore de Natal de Halteres (3)",
    "title": "Árvore de Natal de Halteres (3)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm.jpeg"
    ],
    "files": [
      {
        "id": "133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm",
        "name": "Árvore de Natal de Halteres (3).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/133zNP0fgX3ardDEMFzDsXsqDdvK4oHnm",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 47,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3395,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS",
    "number": 19,
    "folderName": "Árvore de Natal de Vinha",
    "title": "Árvore de Natal de Vinha",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS.jpeg"
    ],
    "files": [
      {
        "id": "1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS",
        "name": "Árvore de Natal de Vinha.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mQlOEi2IsZbVfP6gHK_rUx_RqFgFV7SS",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 109,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4415,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR",
    "number": 20,
    "folderName": "Árvore de Natal e Rena Flexível",
    "title": "Árvore de Natal e Rena Flexível",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR.jpeg"
    ],
    "files": [
      {
        "id": "1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR",
        "name": "Árvore de Natal e Rena Flexível.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1X2sb0yCTaJNlcMwayYcmxexthYCoIfwR",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 3.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2054,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe",
    "number": 21,
    "folderName": "Árvore de Natal e Rena Flexível (2)",
    "title": "Árvore de Natal e Rena Flexível (2)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe.jpeg"
    ],
    "files": [
      {
        "id": "1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe",
        "name": "Árvore de Natal e Rena Flexível (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1CJE1jtz77t-S0MGOXnt9E65bMzxglHWe",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 107,
      "printTimeHours": 7.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5053,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv",
    "number": 22,
    "folderName": "Árvore de Natal para Chá",
    "title": "Árvore de Natal para Chá",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv.jpg"
    ],
    "files": [
      {
        "id": "1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv",
        "name": "Árvore de Natal para Chá.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_NaQbO3M38un_svD8WfSUZ0Iw09sU8Rv",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 120,
      "printTimeHours": 3.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5314,
    "isNew": true,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj",
    "number": 23,
    "folderName": "Árvore Expositora de Bolas de Natal (2)",
    "title": "Árvore Expositora de Bolas de Natal (2)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj.jpg"
    ],
    "files": [
      {
        "id": "1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj",
        "name": "Árvore Expositora de Bolas de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JTVKwkTnyeSCqZ9sxwkzQ1Lo_qWad1qj",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 47,
      "printTimeHours": 7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3700,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9",
    "number": 24,
    "folderName": "Árvore Flexível com Pés",
    "title": "Árvore Flexível com Pés",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9.jpg"
    ],
    "files": [
      {
        "id": "17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9",
        "name": "Árvore Flexível com Pés.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17F5HuWHTyuCn1pHz3aCbgCbrvo-KOFo9",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 50,
      "printTimeHours": 3.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3168,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1c2wzGHi3m_XiPbhdResQGMliNcxlgTse",
    "number": 25,
    "folderName": "Árvore No-Face",
    "title": "Árvore No-Face",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1c2wzGHi3m_XiPbhdResQGMliNcxlgTse.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1c2wzGHi3m_XiPbhdResQGMliNcxlgTse.jpg"
    ],
    "files": [
      {
        "id": "1c2wzGHi3m_XiPbhdResQGMliNcxlgTse",
        "name": "Árvore No-Face.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1c2wzGHi3m_XiPbhdResQGMliNcxlgTse"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1c2wzGHi3m_XiPbhdResQGMliNcxlgTse",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 118,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6032,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J",
    "number": 26,
    "folderName": "Árvore Saltitante",
    "title": "Árvore Saltitante",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J.jpeg"
    ],
    "files": [
      {
        "id": "1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J",
        "name": "Árvore Saltitante.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Z8fNaDFr_mKouX5wq6uVKo48Q-nJlJ6J",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 68,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5561,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm",
    "number": 27,
    "folderName": "Árvores Lawren",
    "title": "Árvores Lawren",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm.png",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm.png"
    ],
    "files": [
      {
        "id": "1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm",
        "name": "Árvores Lawren.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gp6XvTKdOYhVLZquQcK8AitcuYM1Cogm",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 74,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4809,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "15It6edcsAAGWOMoe42F18MchcO80R5n2",
    "number": 28,
    "folderName": "Axolote Bebê de Natal",
    "title": "Axolote Bebê de Natal",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15It6edcsAAGWOMoe42F18MchcO80R5n2.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15It6edcsAAGWOMoe42F18MchcO80R5n2.jpeg"
    ],
    "files": [
      {
        "id": "15It6edcsAAGWOMoe42F18MchcO80R5n2",
        "name": "Axolote Bebê de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/15It6edcsAAGWOMoe42F18MchcO80R5n2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15It6edcsAAGWOMoe42F18MchcO80R5n2",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 80,
      "printTimeHours": 6.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2492,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG",
    "number": 29,
    "folderName": "Baby Yoda de Natal",
    "title": "Baby Yoda de Natal",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG.jpg"
    ],
    "files": [
      {
        "id": "1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG",
        "name": "Baby Yoda de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1KVxIqWbeTb4JQ2CD_eusEH2yGQYQJjtG",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 72,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4659,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S",
    "number": 30,
    "folderName": "Banana Legal",
    "title": "Banana Legal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S.jpg"
    ],
    "files": [
      {
        "id": "1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S",
        "name": "Banana Legal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1SE7ZHXTFZXiPOcA2OKfq_jlcaDs5ih4S",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 88,
      "printTimeHours": 6.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6656,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9",
    "number": 31,
    "folderName": "Biscoito de Gengibre",
    "title": "Biscoito de Gengibre",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9.jpg"
    ],
    "files": [
      {
        "id": "1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9",
        "name": "Biscoito de Gengibre.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ymtNz68n5jW_tNhHHy-IXXG4fXafUTY9",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 40,
      "printTimeHours": 7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3303,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE",
    "number": 32,
    "folderName": "Biscoito de Gengibre (2)",
    "title": "Biscoito de Gengibre (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE.jpg"
    ],
    "files": [
      {
        "id": "1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE",
        "name": "Biscoito de Gengibre (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OC2yu9fDmZ4yXbuL_cj-T_Zz83FEUhLE",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 125,
      "printTimeHours": 2.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4819,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm",
    "number": 33,
    "folderName": "Biscoito de Natal",
    "title": "Biscoito de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm.jpg"
    ],
    "files": [
      {
        "id": "11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm",
        "name": "Biscoito de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11KYuNS21YwRCHrpnDxe0nXq5cl0WAJBm",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 90,
      "printTimeHours": 7.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3105,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1",
    "number": 34,
    "folderName": "Bola de Neve Infantil",
    "title": "Bola de Neve Infantil",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1.jpg"
    ],
    "files": [
      {
        "id": "1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1",
        "name": "Bola de Neve Infantil.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BlFPQEU9kRPdvpl-Z-3Ax7cgXvzi8NH1",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 121,
      "printTimeHours": 4.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2314,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0",
    "number": 35,
    "folderName": "Bolas de Natal Marvel",
    "title": "Bolas de Natal Marvel",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0.jpg"
    ],
    "files": [
      {
        "id": "1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0",
        "name": "Bolas de Natal Marvel.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JC5AaIf7E3xfUHDJ8fDS1b61kC47MNk0",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 120,
      "printTimeHours": 3.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5262,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy",
    "number": 36,
    "folderName": "Bolo de Natal",
    "title": "Bolo de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy.jpg"
    ],
    "files": [
      {
        "id": "1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy",
        "name": "Bolo de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1kZN4RxHkL70gHSSMdv2kDttgljYMmBdy",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 55,
      "printTimeHours": 2.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2775,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte",
    "number": 37,
    "folderName": "Boneco de Neve",
    "title": "Boneco de Neve",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte.jpg"
    ],
    "files": [
      {
        "id": "1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte",
        "name": "Boneco de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1u89gd_VxQgbDlFvq4AZDY5e1Jcf7qfte",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 78,
      "printTimeHours": 2.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3994,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND",
    "number": 38,
    "folderName": "Boneco de Neve (2)",
    "title": "Boneco de Neve (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND.jpg"
    ],
    "files": [
      {
        "id": "1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND",
        "name": "Boneco de Neve (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1RpYkjyB04ERJ-wPSzUFJsup-V2KNcAND",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 105,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6729,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe",
    "number": 39,
    "folderName": "Boneco de Neve Amigável",
    "title": "Boneco de Neve Amigável",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe.jpeg"
    ],
    "files": [
      {
        "id": "1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe",
        "name": "Boneco de Neve Amigável.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jH-d3AGlIKQyrNz7HV6U3ol0JnJkXCxe",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 95,
      "printTimeHours": 6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2198,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU",
    "number": 40,
    "folderName": "Boneco de Neve Anti-Derretimento",
    "title": "Boneco de Neve Anti-Derretimento",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU.jpg"
    ],
    "files": [
      {
        "id": "1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU",
        "name": "Boneco de Neve Anti-Derretimento.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Tcu1S6w6BWGF3x2pKWZHPw7zSwpnAdcU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 94,
      "printTimeHours": 4.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5518,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo",
    "number": 41,
    "folderName": "Boneco de Neve Bebê",
    "title": "Boneco de Neve Bebê",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo.png",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo.png"
    ],
    "files": [
      {
        "id": "12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo",
        "name": "Boneco de Neve Bebê.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12eEoPSQVXRELkDDa08V8qumvQaWZv9Xo",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 110,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4253,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ED0lFZzssGODr5yproJTx5Tmbm6f0_86",
    "number": 42,
    "folderName": "Boneco de Neve de Crochê (2)",
    "title": "Boneco de Neve de Crochê (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ED0lFZzssGODr5yproJTx5Tmbm6f0_86.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ED0lFZzssGODr5yproJTx5Tmbm6f0_86.jpg"
    ],
    "files": [
      {
        "id": "1ED0lFZzssGODr5yproJTx5Tmbm6f0_86",
        "name": "Boneco de Neve de Crochê (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ED0lFZzssGODr5yproJTx5Tmbm6f0_86"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ED0lFZzssGODr5yproJTx5Tmbm6f0_86",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 55,
      "printTimeHours": 2.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2170,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz",
    "number": 43,
    "folderName": "Boneco de Neve de Crochê Articulado (2)",
    "title": "Boneco de Neve de Crochê Articulado (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz.jpg"
    ],
    "files": [
      {
        "id": "1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz",
        "name": "Boneco de Neve de Crochê Articulado (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OUtSpurHwnN0K86pprdVjuqvaXWH9ngz",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 41,
      "printTimeHours": 6.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4432,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro",
    "number": 44,
    "folderName": "Boneco de Neve de Suéter",
    "title": "Boneco de Neve de Suéter",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro.jpeg"
    ],
    "files": [
      {
        "id": "1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro",
        "name": "Boneco de Neve de Suéter.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1zm63BBFrIW15cBV9LPPkDEbf8PMAoOro",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 100,
      "printTimeHours": 3.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3276,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu",
    "number": 45,
    "folderName": "Boneco de Neve Derretido (2)",
    "title": "Boneco de Neve Derretido (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu.jpg"
    ],
    "files": [
      {
        "id": "1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu",
        "name": "Boneco de Neve Derretido (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1oSB0QAUugvBl4GzYMxZaIieQtRnr70zu",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 110,
      "printTimeHours": 2.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6871,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1rVfag2I8vJaROgYR__e26C_z5rSyGQyu",
    "number": 46,
    "folderName": "Boneco de Neve e Esposa",
    "title": "Boneco de Neve e Esposa",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rVfag2I8vJaROgYR__e26C_z5rSyGQyu.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rVfag2I8vJaROgYR__e26C_z5rSyGQyu.jpg"
    ],
    "files": [
      {
        "id": "1rVfag2I8vJaROgYR__e26C_z5rSyGQyu",
        "name": "Boneco de Neve e Esposa.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1rVfag2I8vJaROgYR__e26C_z5rSyGQyu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rVfag2I8vJaROgYR__e26C_z5rSyGQyu",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 114,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2918,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk",
    "number": 47,
    "folderName": "Boneco de Neve e Gazela",
    "title": "Boneco de Neve e Gazela",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk.jpg"
    ],
    "files": [
      {
        "id": "1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk",
        "name": "Boneco de Neve e Gazela.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1VoluUnEIV81yxidPIKHPJRbtFrjdfMzk",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 63,
      "printTimeHours": 7.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4317,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf",
    "number": 48,
    "folderName": "Boneco de Neve Lendo",
    "title": "Boneco de Neve Lendo",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf.jpg"
    ],
    "files": [
      {
        "id": "1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf",
        "name": "Boneco de Neve Lendo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ruyp4_4ajD2b_sHwV0n-BTANp4vvgYXf",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 67,
      "printTimeHours": 6.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4944,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl",
    "number": 49,
    "folderName": "Boneco de Neve Marshmallow",
    "title": "Boneco de Neve Marshmallow",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl.jpeg"
    ],
    "files": [
      {
        "id": "1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl",
        "name": "Boneco de Neve Marshmallow.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Z8HVpCPOrKOwyzZwlMDH9zV6ZUDnT0vl",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 61,
      "printTimeHours": 3.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6227,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn",
    "number": 50,
    "folderName": "Boneco de Neve Saltitante",
    "title": "Boneco de Neve Saltitante",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn.jpeg"
    ],
    "files": [
      {
        "id": "1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn",
        "name": "Boneco de Neve Saltitante.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1B4MZh2nw-Y0D9FULKOhtz7KdglDAE0Fn",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 123,
      "printTimeHours": 6.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5660,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog",
    "number": 51,
    "folderName": "Brilho de Inverno",
    "title": "Brilho de Inverno",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog.jpg"
    ],
    "files": [
      {
        "id": "1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog",
        "name": "Brilho de Inverno.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1LFpoD2-ObDKfJRkLpi3JKuH8htu0dEog",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 99,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6283,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A",
    "number": 52,
    "folderName": "Brinquedos de Natal Articulados",
    "title": "Brinquedos de Natal Articulados",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A.jpg"
    ],
    "files": [
      {
        "id": "1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A",
        "name": "Brinquedos de Natal Articulados.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ppsawfLydT8neKAC6cfOHNF4v7GXnf0A",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 108,
      "printTimeHours": 6.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4799,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843",
    "number": 53,
    "folderName": "BTB",
    "title": "BTB",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843.png",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843.png"
    ],
    "files": [
      {
        "id": "1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843",
        "name": "BTB.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UGII4AiGaBzrsxjBsNBPrRSsBLx5d843",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 94,
      "printTimeHours": 7.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2830,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy",
    "number": 54,
    "folderName": "Bumbum de Natal",
    "title": "Bumbum de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy.jpg"
    ],
    "files": [
      {
        "id": "1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy",
        "name": "Bumbum de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1v4Z9mmnA7112S5uwkLqhNlG_eDrNOhqy",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 60,
      "printTimeHours": 6.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5470,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1vkQWhz05lFLlGojES4z_cvJ8grCSOau8",
    "number": 55,
    "folderName": "Busto do Papai Noel (2)",
    "title": "Busto do Papai Noel (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Busto",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vkQWhz05lFLlGojES4z_cvJ8grCSOau8.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vkQWhz05lFLlGojES4z_cvJ8grCSOau8.jpg"
    ],
    "files": [
      {
        "id": "1vkQWhz05lFLlGojES4z_cvJ8grCSOau8",
        "name": "Busto do Papai Noel (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1vkQWhz05lFLlGojES4z_cvJ8grCSOau8"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vkQWhz05lFLlGojES4z_cvJ8grCSOau8",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 100,
      "printTimeHours": 3.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5322,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p",
    "number": 56,
    "folderName": "Caixa de Bala",
    "title": "Caixa de Bala",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Caixa",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p.jpeg"
    ],
    "files": [
      {
        "id": "1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p",
        "name": "Caixa de Bala.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1feO4wq41ew1wOyMw8GwfR1AkE9nazi8p",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 96,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6630,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA",
    "number": 57,
    "folderName": "Caixa de Correio",
    "title": "Caixa de Correio",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Caixa",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA.jpg"
    ],
    "files": [
      {
        "id": "1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA",
        "name": "Caixa de Correio.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1t7yvoETWdqUnFNlEtmgucna5IF6tQ-PA",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 44,
      "printTimeHours": 3.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4994,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo",
    "number": 58,
    "folderName": "Caixa Surpresa",
    "title": "Caixa Surpresa",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Caixa",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo.jpg"
    ],
    "files": [
      {
        "id": "1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo",
        "name": "Caixa Surpresa.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1RI_uv9G1Hn38kPyOrKhmEb8ZrEjFWlmo",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 51,
      "printTimeHours": 2.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6495,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO",
    "number": 59,
    "folderName": "Caixas de Presente",
    "title": "Caixas de Presente",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Caixa",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO.webp",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO.webp"
    ],
    "files": [
      {
        "id": "1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO",
        "name": "Caixas de Presente.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AjOqRDSULdE5rEK_9jwzKM0z_qkX3AAO",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 90,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3526,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq",
    "number": 60,
    "folderName": "Calendário Árvore",
    "title": "Calendário Árvore",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq.jpg"
    ],
    "files": [
      {
        "id": "1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq",
        "name": "Calendário Árvore.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1CCNlY9oJhbZFO7zgcE1dmwfGVppBYheq",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 78,
      "printTimeHours": 7.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4314,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi",
    "number": 61,
    "folderName": "Camaleão Bravo",
    "title": "Camaleão Bravo",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi.jpg"
    ],
    "files": [
      {
        "id": "1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi",
        "name": "Camaleão Bravo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1IVTtVRhyFiKcP4DZYJHpMFDQHwaFXoEi",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 103,
      "printTimeHours": 6.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6415,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc",
    "number": 62,
    "folderName": "Caneca Papai Noel",
    "title": "Caneca Papai Noel",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc.jpg"
    ],
    "files": [
      {
        "id": "18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc",
        "name": "Caneca Papai Noel.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/18xgPeJuWQV7N4IxqL1GRfma0XqZIjkjc",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 59,
      "printTimeHours": 7.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2539,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p",
    "number": 63,
    "folderName": "Capitão Natal",
    "title": "Capitão Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p.jpg"
    ],
    "files": [
      {
        "id": "1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p",
        "name": "Capitão Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1h_Fjtr8NrskDcKqft59O8ULdFlY2uW8p",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 117,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2468,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s",
    "number": 64,
    "folderName": "Capivara Flexível",
    "title": "Capivara Flexível",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s.jpg"
    ],
    "files": [
      {
        "id": "1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s",
        "name": "Capivara Flexível.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1y7jWGdy6NbuE0KLdhCaPLwH26_p3Ca2s",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 92,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3204,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In",
    "number": 65,
    "folderName": "Carrossel de Velas de Natal",
    "title": "Carrossel de Velas de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Porta-Vela",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In.jpeg"
    ],
    "files": [
      {
        "id": "1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In",
        "name": "Carrossel de Velas de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dq_KNjkLHyLQTFyLIqMAgca0Yq9sT7In",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 97,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5379,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW",
    "number": 66,
    "folderName": "Cartão Árvore de Natal Multicolorido",
    "title": "Cartão Árvore de Natal Multicolorido",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW.jpeg"
    ],
    "files": [
      {
        "id": "1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW",
        "name": "Cartão Árvore de Natal Multicolorido.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hZjhpApTGWLaFEO_ADLMppagzEmGwSkW",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 98,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2798,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1",
    "number": 67,
    "folderName": "Cartão Kit Árvore de Natal",
    "title": "Cartão Kit Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1.jpg"
    ],
    "files": [
      {
        "id": "1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1",
        "name": "Cartão Kit Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1t7dOJIUb8l3Ab0ZLbxeWS7ihlvjmnga1",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 75,
      "printTimeHours": 7.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2116,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1pUELjHWewtucEutDgx6nNesgLqnc8BOd",
    "number": 68,
    "folderName": "Cartão Kit AT-AT de Natal Articulado",
    "title": "Cartão Kit AT-AT de Natal Articulado",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pUELjHWewtucEutDgx6nNesgLqnc8BOd.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pUELjHWewtucEutDgx6nNesgLqnc8BOd.jpg"
    ],
    "files": [
      {
        "id": "1pUELjHWewtucEutDgx6nNesgLqnc8BOd",
        "name": "Cartão Kit AT-AT de Natal Articulado.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1pUELjHWewtucEutDgx6nNesgLqnc8BOd"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pUELjHWewtucEutDgx6nNesgLqnc8BOd",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 103,
      "printTimeHours": 2.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2039,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17Azy9VWHTwENifxlzVxIuJoMcabLp2fH",
    "number": 69,
    "folderName": "Cartão Kit Rena",
    "title": "Cartão Kit Rena",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17Azy9VWHTwENifxlzVxIuJoMcabLp2fH.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17Azy9VWHTwENifxlzVxIuJoMcabLp2fH.jpg"
    ],
    "files": [
      {
        "id": "17Azy9VWHTwENifxlzVxIuJoMcabLp2fH",
        "name": "Cartão Kit Rena.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17Azy9VWHTwENifxlzVxIuJoMcabLp2fH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17Azy9VWHTwENifxlzVxIuJoMcabLp2fH",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 117,
      "printTimeHours": 6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6576,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA",
    "number": 70,
    "folderName": "Cartão Kit Rena Corpo Inteiro",
    "title": "Cartão Kit Rena Corpo Inteiro",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA.jpg"
    ],
    "files": [
      {
        "id": "14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA",
        "name": "Cartão Kit Rena Corpo Inteiro.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14DMoLlz7Luv50ixHCaLuUMYn7TTymAvA",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 42,
      "printTimeHours": 5.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4568,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1u46_Y83oztqqZAMbN84NG3zneVUxTFqB",
    "number": 71,
    "folderName": "Cartão Kit Trenó de Natal",
    "title": "Cartão Kit Trenó de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1u46_Y83oztqqZAMbN84NG3zneVUxTFqB.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1u46_Y83oztqqZAMbN84NG3zneVUxTFqB.jpeg"
    ],
    "files": [
      {
        "id": "1u46_Y83oztqqZAMbN84NG3zneVUxTFqB",
        "name": "Cartão Kit Trenó de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1u46_Y83oztqqZAMbN84NG3zneVUxTFqB"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1u46_Y83oztqqZAMbN84NG3zneVUxTFqB",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 55,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6678,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ",
    "number": 72,
    "folderName": "Cartão Rena Corpo Inteiro",
    "title": "Cartão Rena Corpo Inteiro",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ.jpeg"
    ],
    "files": [
      {
        "id": "13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ",
        "name": "Cartão Rena Corpo Inteiro.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/13RKp8K_Zno4_kjMmcMqymEQZQ78rbqiQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 86,
      "printTimeHours": 3.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3107,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC",
    "number": 73,
    "folderName": "Casa de Gengibre",
    "title": "Casa de Gengibre",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC.jpg"
    ],
    "files": [
      {
        "id": "1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC",
        "name": "Casa de Gengibre.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pqNpzQ1jEwdhnlaorMR4O601CS_3KDwC",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 125,
      "printTimeHours": 6.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5080,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx",
    "number": 74,
    "folderName": "Casa de Natal (2)",
    "title": "Casa de Natal (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx.jpg"
    ],
    "files": [
      {
        "id": "1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx",
        "name": "Casa de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Lf-dhJw9KkU1ygaviHf_Ak2jsNR4D1Vx",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 71,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4851,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0",
    "number": 75,
    "folderName": "Castiçal",
    "title": "Castiçal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0.webp",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0.webp"
    ],
    "files": [
      {
        "id": "17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0",
        "name": "Castiçal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17BrNYqjWjJ2cctzXKDZ4cl-yxuHc7Jx0",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 103,
      "printTimeHours": 2.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5610,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi",
    "number": 76,
    "folderName": "Cavalo",
    "title": "Cavalo",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi.jpg"
    ],
    "files": [
      {
        "id": "1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi",
        "name": "Cavalo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cJGLkwypDNlePYt8pY-0cNCttoCW8kFi",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 85,
      "printTimeHours": 6.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6278,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV",
    "number": 77,
    "folderName": "Cavalo Engraçado",
    "title": "Cavalo Engraçado",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV.jpg"
    ],
    "files": [
      {
        "id": "1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV",
        "name": "Cavalo Engraçado.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1lt1vNwYi_joIEg61KkzPtGmHlSGVxcRV",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 44,
      "printTimeHours": 6.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4393,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ",
    "number": 78,
    "folderName": "Cena de Natal Estilo Papel com Luminária",
    "title": "Cena de Natal Estilo Papel com Luminária",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Luminária",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ.jpeg"
    ],
    "files": [
      {
        "id": "1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ",
        "name": "Cena de Natal Estilo Papel com Luminária.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pdL5-5ZQuf8d1D_y-pB9KUKi0I9Sk9eQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5219,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy",
    "number": 79,
    "folderName": "Cena Decorativa",
    "title": "Cena Decorativa",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy.jpg"
    ],
    "files": [
      {
        "id": "1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy",
        "name": "Cena Decorativa.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Vo8NJ93vwT68UrNFBbdVOsA3xtUVu-vy",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 50,
      "printTimeHours": 3.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6846,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Sfjekter_e9_VIzHlgX4AaMcH--B97AB",
    "number": 80,
    "folderName": "Chalé de Natal (2)",
    "title": "Chalé de Natal (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Sfjekter_e9_VIzHlgX4AaMcH--B97AB.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Sfjekter_e9_VIzHlgX4AaMcH--B97AB.jpg"
    ],
    "files": [
      {
        "id": "1Sfjekter_e9_VIzHlgX4AaMcH--B97AB",
        "name": "Chalé de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Sfjekter_e9_VIzHlgX4AaMcH--B97AB"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Sfjekter_e9_VIzHlgX4AaMcH--B97AB",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 97,
      "printTimeHours": 7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4387,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK",
    "number": 81,
    "folderName": "Chaveiro 2",
    "title": "Chaveiro 2",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Chaveiro",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK.jpg"
    ],
    "files": [
      {
        "id": "1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK",
        "name": "Chaveiro 2.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1G2XZQ6RHmNSkFJ6ny7gEm3iZSO21UnqK",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 42,
      "printTimeHours": 6.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5515,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl",
    "number": 82,
    "folderName": "Chaveiro Boneco de Neve",
    "title": "Chaveiro Boneco de Neve",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl.jpeg"
    ],
    "files": [
      {
        "id": "1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl",
        "name": "Chaveiro Boneco de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_XAR8gCcDykflsYw0zpmHIIzG4-NsYYl",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 69,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5869,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ",
    "number": 83,
    "folderName": "Chaveiro de Gengibre",
    "title": "Chaveiro de Gengibre",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Chaveiro",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ.jpg"
    ],
    "files": [
      {
        "id": "1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ",
        "name": "Chaveiro de Gengibre.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hJkmfE0-5c8l6fYFL9ONVDJzTZDSyXeQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 77,
      "printTimeHours": 7.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5199,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC",
    "number": 84,
    "folderName": "Chaveiro de Luva de Natal",
    "title": "Chaveiro de Luva de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Chaveiro",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC.jpg"
    ],
    "files": [
      {
        "id": "1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC",
        "name": "Chaveiro de Luva de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1prvulKCzmg72KQ6MjKT69-HL-yfi8CYC",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6303,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-",
    "number": 85,
    "folderName": "Chaveiro de Sapato",
    "title": "Chaveiro de Sapato",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Chaveiro",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-.jpg"
    ],
    "files": [
      {
        "id": "1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-",
        "name": "Chaveiro de Sapato.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Sp5TmJbnczDI2YBBYgkC7gv7cqKypmL-",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 92,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3905,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr",
    "number": 86,
    "folderName": "Chaveiro Grinch",
    "title": "Chaveiro Grinch",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr.jpg"
    ],
    "files": [
      {
        "id": "1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr",
        "name": "Chaveiro Grinch.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NuVWaqHOSRNpVt16M_XV60zC-0epU_sr",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 40,
      "printTimeHours": 2.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6351,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1B-cbproN62Tryy7__yAKQM5DC8hu66ma",
    "number": 87,
    "folderName": "Cofre Secreto Árvore de Natal",
    "title": "Cofre Secreto Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B-cbproN62Tryy7__yAKQM5DC8hu66ma.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B-cbproN62Tryy7__yAKQM5DC8hu66ma.jpeg"
    ],
    "files": [
      {
        "id": "1B-cbproN62Tryy7__yAKQM5DC8hu66ma",
        "name": "Cofre Secreto Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1B-cbproN62Tryy7__yAKQM5DC8hu66ma"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1B-cbproN62Tryy7__yAKQM5DC8hu66ma",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 92,
      "printTimeHours": 2.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5149,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ",
    "number": 88,
    "folderName": "Cone de Floco de Neve",
    "title": "Cone de Floco de Neve",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ.jpg"
    ],
    "files": [
      {
        "id": "1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ",
        "name": "Cone de Floco de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vg03kwYPJZxfmWFWqu-BWgkTv2kFeoxJ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 117,
      "printTimeHours": 4.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2497,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb",
    "number": 89,
    "folderName": "Conjunto de Cortadores de Biscoito",
    "title": "Conjunto de Cortadores de Biscoito",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb.jpg"
    ],
    "files": [
      {
        "id": "1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb",
        "name": "Conjunto de Cortadores de Biscoito.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1wp3bNKtGFyI7h4Sb44EjRLeQG21dE_Vb",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 49,
      "printTimeHours": 6.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5491,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp",
    "number": 90,
    "folderName": "Conjunto de Cortadores de Biscoito 2",
    "title": "Conjunto de Cortadores de Biscoito 2",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp.jpg"
    ],
    "files": [
      {
        "id": "1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp",
        "name": "Conjunto de Cortadores de Biscoito 2.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1DsCWWUKs_qPlEeUxPdUtTs9o1FP26fhp",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 116,
      "printTimeHours": 6.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4908,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1j1IeW7N4_PajLsLBFZibogV8R3QO_921",
    "number": 91,
    "folderName": "Cortador de Biscoito",
    "title": "Cortador de Biscoito",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1j1IeW7N4_PajLsLBFZibogV8R3QO_921.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1j1IeW7N4_PajLsLBFZibogV8R3QO_921.jpg"
    ],
    "files": [
      {
        "id": "1j1IeW7N4_PajLsLBFZibogV8R3QO_921",
        "name": "Cortador de Biscoito.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1j1IeW7N4_PajLsLBFZibogV8R3QO_921"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1j1IeW7N4_PajLsLBFZibogV8R3QO_921",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6453,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7",
    "number": 92,
    "folderName": "Cortador de Biscoito Bengala de Natal",
    "title": "Cortador de Biscoito Bengala de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7.jpg"
    ],
    "files": [
      {
        "id": "1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7",
        "name": "Cortador de Biscoito Bengala de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gnQOCFRrJy5iqBlIM0q2HbqxPfzPCji7",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 66,
      "printTimeHours": 4.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2089,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK",
    "number": 93,
    "folderName": "Cortadores de Biscoito Guirlanda de Natal",
    "title": "Cortadores de Biscoito Guirlanda de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK.jpg"
    ],
    "files": [
      {
        "id": "1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK",
        "name": "Cortadores de Biscoito Guirlanda de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1IdMCJTbaALVrUSaGVwSQ6lbVLCAgwLyK",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 85,
      "printTimeHours": 6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4990,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300",
    "number": 94,
    "folderName": "Cupcakes de Urso",
    "title": "Cupcakes de Urso",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300.jpg"
    ],
    "files": [
      {
        "id": "1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300",
        "name": "Cupcakes de Urso.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uU_JAr9rTJyqhfEV4aSwx2RBU_r_D300",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 57,
      "printTimeHours": 3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6009,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6",
    "number": 95,
    "folderName": "Decoração de Natal (2)",
    "title": "Decoração de Natal (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6.jpg"
    ],
    "files": [
      {
        "id": "12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6",
        "name": "Decoração de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12WXWVzctDmDuQTO4xGrIaIH_WbnjVXI6",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 104,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6858,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46",
    "number": 96,
    "folderName": "Decoração de Natal de Lixinho",
    "title": "Decoração de Natal de Lixinho",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46.jpeg"
    ],
    "files": [
      {
        "id": "1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46",
        "name": "Decoração de Natal de Lixinho.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1sXS_wf9m4HCetu_wV2PF0IMypdDB5O46",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 42,
      "printTimeHours": 3.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4900,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ",
    "number": 97,
    "folderName": "Decoração de Natal Ruben",
    "title": "Decoração de Natal Ruben",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ.jpeg"
    ],
    "files": [
      {
        "id": "1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ",
        "name": "Decoração de Natal Ruben.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1U_72qqhy-4gNCcVmPs3HZfY8uHN39PrZ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 101,
      "printTimeHours": 3.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3356,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ",
    "number": 98,
    "folderName": "Decoração de Urso",
    "title": "Decoração de Urso",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ.jpg"
    ],
    "files": [
      {
        "id": "1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ",
        "name": "Decoração de Urso.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ClnDr_ZSKqNE0gdoi0bLoLNiAn_WRFYJ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 2.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3465,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7",
    "number": 99,
    "folderName": "Decoração Gazela",
    "title": "Decoração Gazela",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7.jpg"
    ],
    "files": [
      {
        "id": "17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7",
        "name": "Decoração Gazela.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17xBlVpx9enn1tTaV5WgSwZRnNkpBO9U7",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 71,
      "printTimeHours": 3.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3212,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e",
    "number": 100,
    "folderName": "Diorama de Natal",
    "title": "Diorama de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e.jpg"
    ],
    "files": [
      {
        "id": "1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e",
        "name": "Diorama de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rC50sMHVV-I-qMWQ7xe3NY8-6uzRXI8e",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 93,
      "printTimeHours": 7.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6261,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0",
    "number": 101,
    "folderName": "Dragão de Natal (2)",
    "title": "Dragão de Natal (2)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0.jpg"
    ],
    "files": [
      {
        "id": "1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0",
        "name": "Dragão de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1bY3W3cBgb7K8KKz281fX1jn5zlbJH_N0",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2400,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_",
    "number": 102,
    "folderName": "Duende Articulado (2)",
    "title": "Duende Articulado (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_.jpg"
    ],
    "files": [
      {
        "id": "1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_",
        "name": "Duende Articulado (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yy0S9PGo9doe6e3E80TW_eskUUxb3Hm_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 106,
      "printTimeHours": 4.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4074,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G",
    "number": 103,
    "folderName": "Elegância de Inverno",
    "title": "Elegância de Inverno",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G.jpg"
    ],
    "files": [
      {
        "id": "1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G",
        "name": "Elegância de Inverno.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yWH1ZvsmYOBzkT7R0HrNwfE1Sin7M89G",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4937,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf",
    "number": 104,
    "folderName": "Enfeite",
    "title": "Enfeite",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf.jpg"
    ],
    "files": [
      {
        "id": "1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf",
        "name": "Enfeite.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1geeuIhkMtWcf6A4FM1NjJjPGitGo5OHf",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 105,
      "printTimeHours": 2.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2741,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0",
    "number": 105,
    "folderName": "Enfeite 2",
    "title": "Enfeite 2",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0.jpg"
    ],
    "files": [
      {
        "id": "1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0",
        "name": "Enfeite 2.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vlaZad2uHDqpP9tjm0GReosgVHAQ1IE0",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 60,
      "printTimeHours": 5.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6912,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb",
    "number": 106,
    "folderName": "Enfeite 7",
    "title": "Enfeite 7",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb.jpg"
    ],
    "files": [
      {
        "id": "1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb",
        "name": "Enfeite 7.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1H4x77G0Hg6gWixf5TUqeGwO0EbZYh3Rb",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 112,
      "printTimeHours": 7.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5731,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro",
    "number": 107,
    "folderName": "Enfeite 8",
    "title": "Enfeite 8",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro.jpg"
    ],
    "files": [
      {
        "id": "1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro",
        "name": "Enfeite 8.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yZcZY75-OdIYnywR8VHO9SSC7qqOQ3Ro",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 58,
      "printTimeHours": 7.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3031,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD",
    "number": 108,
    "folderName": "Enfeite 10",
    "title": "Enfeite 10",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD.jpg"
    ],
    "files": [
      {
        "id": "1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD",
        "name": "Enfeite 10.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1i2k5PM2WxOjU3UovX8oaUjM42hPRuuKD",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 47,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4454,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV",
    "number": 109,
    "folderName": "Enfeite 15",
    "title": "Enfeite 15",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV.jpg"
    ],
    "files": [
      {
        "id": "1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV",
        "name": "Enfeite 15.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1G22CdXpUEJJ8xvumCbsiZVdNGmtcKfSV",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 99,
      "printTimeHours": 2.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5326,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ",
    "number": 110,
    "folderName": "Enfeite 19",
    "title": "Enfeite 19",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ.jpg"
    ],
    "files": [
      {
        "id": "1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ",
        "name": "Enfeite 19.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cz6gJ8lA37d0kV4O1dmLkELJYmtmTVzQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 71,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5021,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G",
    "number": 111,
    "folderName": "Enfeite 23",
    "title": "Enfeite 23",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G.jpg"
    ],
    "files": [
      {
        "id": "1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G",
        "name": "Enfeite 23.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HIK1QKNz2j9PRJaCwBp48b0pn12DMy4G",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 85,
      "printTimeHours": 4.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3173,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU",
    "number": 112,
    "folderName": "Enfeite 26",
    "title": "Enfeite 26",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU.jpg"
    ],
    "files": [
      {
        "id": "1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU",
        "name": "Enfeite 26.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OTgnPn8rHbSeknyB1p6uyeZ1-5aQaJOU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 54,
      "printTimeHours": 6.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6638,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr",
    "number": 113,
    "folderName": "Enfeite 33",
    "title": "Enfeite 33",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr.jpg"
    ],
    "files": [
      {
        "id": "1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr",
        "name": "Enfeite 33.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1fVEaenPLS3-GxS0sNw1P5SCmCb0DN2zr",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 119,
      "printTimeHours": 4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6107,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy",
    "number": 114,
    "folderName": "Enfeite 34",
    "title": "Enfeite 34",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy.jpeg"
    ],
    "files": [
      {
        "id": "1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy",
        "name": "Enfeite 34.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HVBVwXUEKgfGl6g3SD2ouXKe-vFH-Bfy",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 44,
      "printTimeHours": 5.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5899,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U",
    "number": 115,
    "folderName": "Enfeite 41",
    "title": "Enfeite 41",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U.jpg"
    ],
    "files": [
      {
        "id": "1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U",
        "name": "Enfeite 41.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1SjwWJHh-7UQA2Wef0TYmH6hwx3652l2U",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 3.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3600,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs",
    "number": 116,
    "folderName": "Enfeite 45",
    "title": "Enfeite 45",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs.jpg"
    ],
    "files": [
      {
        "id": "1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs",
        "name": "Enfeite 45.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BAOqd6JSZuAf8kLNX1uCiTQ-TRwQGrbs",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 51,
      "printTimeHours": 7.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2352,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17HsDkg110uneiveKdFu_OkxQOGMt2kXa",
    "number": 117,
    "folderName": "Enfeite 46",
    "title": "Enfeite 46",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17HsDkg110uneiveKdFu_OkxQOGMt2kXa.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17HsDkg110uneiveKdFu_OkxQOGMt2kXa.jpg"
    ],
    "files": [
      {
        "id": "17HsDkg110uneiveKdFu_OkxQOGMt2kXa",
        "name": "Enfeite 46.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17HsDkg110uneiveKdFu_OkxQOGMt2kXa"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17HsDkg110uneiveKdFu_OkxQOGMt2kXa",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 120,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6159,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "13wi1NEzz6c7iEZBast6s3WucnRjEKVi1",
    "number": 118,
    "folderName": "Enfeite 2026",
    "title": "Enfeite 2026",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13wi1NEzz6c7iEZBast6s3WucnRjEKVi1.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/13wi1NEzz6c7iEZBast6s3WucnRjEKVi1.jpg"
    ],
    "files": [
      {
        "id": "13wi1NEzz6c7iEZBast6s3WucnRjEKVi1",
        "name": "Enfeite 2026.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/13wi1NEzz6c7iEZBast6s3WucnRjEKVi1"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/13wi1NEzz6c7iEZBast6s3WucnRjEKVi1",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 56,
      "printTimeHours": 5.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3458,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84",
    "number": 119,
    "folderName": "Enfeite de Natal (2)",
    "title": "Enfeite de Natal (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84.jpeg"
    ],
    "files": [
      {
        "id": "1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84",
        "name": "Enfeite de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pF2QJ_sQCKmJ3hBFwVbhZhSAQPUDHz84",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 59,
      "printTimeHours": 2.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5950,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU",
    "number": 120,
    "folderName": "Enfeite de Natal Baby Yoda",
    "title": "Enfeite de Natal Baby Yoda",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU.jpg"
    ],
    "files": [
      {
        "id": "1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU",
        "name": "Enfeite de Natal Baby Yoda.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Rp4za3Dyl_vAk_QWAWLD4L4tPPlh51AU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 43,
      "printTimeHours": 4.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2194,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K",
    "number": 121,
    "folderName": "Enfeite de Natal YouTube",
    "title": "Enfeite de Natal YouTube",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K.jpg"
    ],
    "files": [
      {
        "id": "1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K",
        "name": "Enfeite de Natal YouTube.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gXS3kY-7A2DeekvsqrP-1PXXy7s_CM6K",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 102,
      "printTimeHours": 2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2903,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF",
    "number": 122,
    "folderName": "Enfeite Dragão",
    "title": "Enfeite Dragão",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF.jpg"
    ],
    "files": [
      {
        "id": "1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF",
        "name": "Enfeite Dragão.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1MSQH3hyWByIHrC9EYNkESLOfZ0MvwyuF",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 123,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4864,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk",
    "number": 123,
    "folderName": "Enfeite Esquilo com Chapéu",
    "title": "Enfeite Esquilo com Chapéu",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk.jpeg"
    ],
    "files": [
      {
        "id": "10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk",
        "name": "Enfeite Esquilo com Chapéu.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/10EJ9ByE0THtzdlGHOSrhHoZtoeIXEsMk",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 66,
      "printTimeHours": 7.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4812,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp",
    "number": 124,
    "folderName": "Enfeite Papai Noel 5",
    "title": "Enfeite Papai Noel 5",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp.jpg"
    ],
    "files": [
      {
        "id": "12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp",
        "name": "Enfeite Papai Noel 5.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12UQS0_5lO0o7ZKWA32jcCVvCxGSU3CJp",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 64,
      "printTimeHours": 5.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4983,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi",
    "number": 125,
    "folderName": "Enfeite Sombrio",
    "title": "Enfeite Sombrio",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi.jpg"
    ],
    "files": [
      {
        "id": "17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi",
        "name": "Enfeite Sombrio.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17OUuNS2WaxuQD5HlsA7sygVZdeTRYCZi",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 118,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2519,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Ndmivt_274HI2aV3NOMcahJPnDAstlB6",
    "number": 126,
    "folderName": "Enfeites",
    "title": "Enfeites",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Enfeite",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Ndmivt_274HI2aV3NOMcahJPnDAstlB6.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Ndmivt_274HI2aV3NOMcahJPnDAstlB6.jpeg"
    ],
    "files": [
      {
        "id": "1Ndmivt_274HI2aV3NOMcahJPnDAstlB6",
        "name": "Enfeites.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Ndmivt_274HI2aV3NOMcahJPnDAstlB6"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Ndmivt_274HI2aV3NOMcahJPnDAstlB6",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 84,
      "printTimeHours": 3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6103,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP",
    "number": 127,
    "folderName": "Estrela",
    "title": "Estrela",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP.jpeg"
    ],
    "files": [
      {
        "id": "1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP",
        "name": "Estrela.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JXN51-ZywfFla4LQUmWBCzFRyYcC2EXP",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 114,
      "printTimeHours": 2.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3499,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu",
    "number": 128,
    "folderName": "Estrela (2)",
    "title": "Estrela (2)",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu.jpg"
    ],
    "files": [
      {
        "id": "1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu",
        "name": "Estrela (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UgMuUD2tI3OQAPD0NXZoCv53oBwBFHZu",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 76,
      "printTimeHours": 7.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5389,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H",
    "number": 129,
    "folderName": "Estrela 3",
    "title": "Estrela 3",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H.jpg"
    ],
    "files": [
      {
        "id": "1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H",
        "name": "Estrela 3.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UBE72WmmB_kot-hVkSAvKXFs9D9t-w5H",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 46,
      "printTimeHours": 6.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2472,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI",
    "number": 130,
    "folderName": "Estrela de Açúcar",
    "title": "Estrela de Açúcar",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI.jpg"
    ],
    "files": [
      {
        "id": "17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI",
        "name": "Estrela de Açúcar.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17e1asUnoiHRFmIeZb3G9C-m2YxphoYWI",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 48,
      "printTimeHours": 5.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5220,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7",
    "number": 131,
    "folderName": "Estrela de Natal (2)",
    "title": "Estrela de Natal (2)",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7.jpg"
    ],
    "files": [
      {
        "id": "12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7",
        "name": "Estrela de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12UtDfLg8uyyYnD6wD5GliBEN5OGUemj7",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 65,
      "printTimeHours": 3.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5009,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ",
    "number": 132,
    "folderName": "Estrela de Natal Brilhante",
    "title": "Estrela de Natal Brilhante",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ.jpg"
    ],
    "files": [
      {
        "id": "1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ",
        "name": "Estrela de Natal Brilhante.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gA4j6dABWjiZ5hBk8t7Hb7t3AsLBuYsQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 99,
      "printTimeHours": 7.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2914,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS",
    "number": 133,
    "folderName": "Estrela de Topo Árvore de Natal",
    "title": "Estrela de Topo Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS.jpeg"
    ],
    "files": [
      {
        "id": "1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS",
        "name": "Estrela de Topo Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jQ-dUMErVs7G1NiZ2WaY00lNXXJecftS",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 54,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2615,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ",
    "number": 134,
    "folderName": "Estrelinhas",
    "title": "Estrelinhas",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ.jpg"
    ],
    "files": [
      {
        "id": "169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ",
        "name": "Estrelinhas.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/169eRdTEK3Wv89qzA9N7NvFDxsE8YzUVQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 45,
      "printTimeHours": 3.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2283,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12z1nROaa6-N6FL2Dltn5x7_y20He7euP",
    "number": 135,
    "folderName": "Floco de Neve (2)",
    "title": "Floco de Neve (2)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12z1nROaa6-N6FL2Dltn5x7_y20He7euP.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12z1nROaa6-N6FL2Dltn5x7_y20He7euP.jpg"
    ],
    "files": [
      {
        "id": "12z1nROaa6-N6FL2Dltn5x7_y20He7euP",
        "name": "Floco de Neve (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12z1nROaa6-N6FL2Dltn5x7_y20He7euP"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12z1nROaa6-N6FL2Dltn5x7_y20He7euP",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 78,
      "printTimeHours": 7.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2441,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe",
    "number": 136,
    "folderName": "Flocos de Neve",
    "title": "Flocos de Neve",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe.jpg"
    ],
    "files": [
      {
        "id": "1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe",
        "name": "Flocos de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WALwsmmV3DdMNjxKvJQVGbjIalgcVZNe",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 58,
      "printTimeHours": 6.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3729,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm",
    "number": 137,
    "folderName": "Garota de Natal",
    "title": "Garota de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm.jpg"
    ],
    "files": [
      {
        "id": "17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm",
        "name": "Garota de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17qQfhKlrFKi1MP-rfSPT4M7SGFDKTbbm",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 57,
      "printTimeHours": 2.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3556,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME",
    "number": 138,
    "folderName": "Gatinho de Botas de Natal",
    "title": "Gatinho de Botas de Natal",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME.jpg"
    ],
    "files": [
      {
        "id": "14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME",
        "name": "Gatinho de Botas de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14UPRXIlkxODXeNVR2XsVpfqm5DTPcFME",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 84,
      "printTimeHours": 3.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5136,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz",
    "number": 139,
    "folderName": "Gato de Natal",
    "title": "Gato de Natal",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz.jpg"
    ],
    "files": [
      {
        "id": "1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz",
        "name": "Gato de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JV3l6wVzYZYOYQN4KGqUi-oBhk1yO9Wz",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 62,
      "printTimeHours": 5.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3582,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_",
    "number": 140,
    "folderName": "Gato de Natal (2)",
    "title": "Gato de Natal (2)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_.jpg"
    ],
    "files": [
      {
        "id": "1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_",
        "name": "Gato de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1KQz-jtYJGTW8yNjkCCw-p_RdVUE05Fk_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 98,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6989,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss",
    "number": 141,
    "folderName": "Gato Engraçado",
    "title": "Gato Engraçado",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss.jpg"
    ],
    "files": [
      {
        "id": "1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss",
        "name": "Gato Engraçado.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1bTNFRIfI6BTZORIQdH6EXdzmmPeSC3Ss",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 124,
      "printTimeHours": 4.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2218,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny",
    "number": 142,
    "folderName": "Globo de Natal",
    "title": "Globo de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny.jpeg"
    ],
    "files": [
      {
        "id": "1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny",
        "name": "Globo de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1xW4y-4sF3SzpxI3HdweiSLFzoGrGJdny",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 2.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3553,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd",
    "number": 143,
    "folderName": "Globo de Neve",
    "title": "Globo de Neve",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd.jpg"
    ],
    "files": [
      {
        "id": "11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd",
        "name": "Globo de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11SDunuYMOuHrkQ-ibgLZLlppiBb9yUrd",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 52,
      "printTimeHours": 6.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4930,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow",
    "number": 144,
    "folderName": "Globo de Neve Cabana de Inverno",
    "title": "Globo de Neve Cabana de Inverno",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow.jpg"
    ],
    "files": [
      {
        "id": "1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow",
        "name": "Globo de Neve Cabana de Inverno.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WGy0kkzfa9fiVXdCw52S1TQdts9XRJow",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 68,
      "printTimeHours": 3.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5266,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV",
    "number": 145,
    "folderName": "Globo de Neve com Árvore",
    "title": "Globo de Neve com Árvore",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV.jpg"
    ],
    "files": [
      {
        "id": "1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV",
        "name": "Globo de Neve com Árvore.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1br8LCbLBPW0SXcvtFjkJOrGgSj9KZklV",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 119,
      "printTimeHours": 7.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5015,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S",
    "number": 146,
    "folderName": "Gnomo (2)",
    "title": "Gnomo (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S.jpg"
    ],
    "files": [
      {
        "id": "1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S",
        "name": "Gnomo (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WuymkhZ9mA_W6iXNIijLzAEXIjeQUF7S",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 102,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6201,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T",
    "number": 147,
    "folderName": "Gnomo Flexível Peludo",
    "title": "Gnomo Flexível Peludo",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T.jpeg"
    ],
    "files": [
      {
        "id": "1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T",
        "name": "Gnomo Flexível Peludo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1k3diy_zj_KVN0VYP5q57UlcLjoYTM23T",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 83,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4005,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU",
    "number": 148,
    "folderName": "Gnomo Legal de Natal",
    "title": "Gnomo Legal de Natal",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU.jpeg"
    ],
    "files": [
      {
        "id": "14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU",
        "name": "Gnomo Legal de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14qB1xZZLs1-_T-OsT5oc5Az1c_71qiNU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 42,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5920,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO",
    "number": 149,
    "folderName": "Gnomo Yeah",
    "title": "Gnomo Yeah",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO.jpeg"
    ],
    "files": [
      {
        "id": "1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO",
        "name": "Gnomo Yeah.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1IunT7gau2Kn8MX2D-agDo4EF5TpAv4hO",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 42,
      "printTimeHours": 3.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3859,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat",
    "number": 150,
    "folderName": "Grogu de Natal Pré-Suportado",
    "title": "Grogu de Natal Pré-Suportado",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat.jpg"
    ],
    "files": [
      {
        "id": "1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat",
        "name": "Grogu de Natal Pré-Suportado.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_-jZpWT9zmrZOpdaH3dQE35o5ELu3Bat",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 80,
      "printTimeHours": 6.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3458,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt",
    "number": 151,
    "folderName": "Ho Ho Ho",
    "title": "Ho Ho Ho",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt.jpg"
    ],
    "files": [
      {
        "id": "12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt",
        "name": "Ho Ho Ho.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12MqliGXhoJw_47ZD4wdhN6EwTuaoOaYt",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 105,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6411,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "15uapkV7jpVfonFxxG87nvMHSVlDd6z9s",
    "number": 152,
    "folderName": "Joltik de Natal",
    "title": "Joltik de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15uapkV7jpVfonFxxG87nvMHSVlDd6z9s.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15uapkV7jpVfonFxxG87nvMHSVlDd6z9s.jpg"
    ],
    "files": [
      {
        "id": "15uapkV7jpVfonFxxG87nvMHSVlDd6z9s",
        "name": "Joltik de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/15uapkV7jpVfonFxxG87nvMHSVlDd6z9s"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15uapkV7jpVfonFxxG87nvMHSVlDd6z9s",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 66,
      "printTimeHours": 6.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4293,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU",
    "number": 153,
    "folderName": "Krampus",
    "title": "Krampus",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU.jpeg"
    ],
    "files": [
      {
        "id": "12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU",
        "name": "Krampus.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12_RepP-Nb-7tl7gR_jJhYsnJuunVUUqU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 64,
      "printTimeHours": 7.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5388,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG",
    "number": 154,
    "folderName": "Krampus Flexível",
    "title": "Krampus Flexível",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG.jpg"
    ],
    "files": [
      {
        "id": "1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG",
        "name": "Krampus Flexível.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1wD21R4--9Ur44-axOOIR5h7fHHG-b8XG",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 46,
      "printTimeHours": 2.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5809,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y",
    "number": 155,
    "folderName": "Laço de Presente de Natal",
    "title": "Laço de Presente de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y.jpeg"
    ],
    "files": [
      {
        "id": "1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y",
        "name": "Laço de Presente de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1B4xItJDWcKtEMCE1fpffNPmY0JsACF0Y",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 69,
      "printTimeHours": 3.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6892,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR",
    "number": 156,
    "folderName": "Ladrão Furtivo",
    "title": "Ladrão Furtivo",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR.jpg"
    ],
    "files": [
      {
        "id": "1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR",
        "name": "Ladrão Furtivo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mJ5rsP-Ndj4j-vZ5cO20gRbSJG3JhxYR",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 85,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5907,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq",
    "number": 157,
    "folderName": "Lanterna de Natal",
    "title": "Lanterna de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq.jpeg"
    ],
    "files": [
      {
        "id": "1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq",
        "name": "Lanterna de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1aoUnr3clWaFcxB0yaBsro3xON3CwPRdq",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 76,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5186,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc",
    "number": 158,
    "folderName": "Luminária Árvore de Natal",
    "title": "Luminária Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Luminária",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc.jpg"
    ],
    "files": [
      {
        "id": "1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc",
        "name": "Luminária Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JXmVn-7JE2fpBGmryRB2Y2G1fwOlR5Gc",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 53,
      "printTimeHours": 5.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4813,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "14JOVTfi4q87f4MoJx3vJJsesCpwH6z69",
    "number": 159,
    "folderName": "Luminária de Natal (2)",
    "title": "Luminária de Natal (2)",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Luminária",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14JOVTfi4q87f4MoJx3vJJsesCpwH6z69.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/14JOVTfi4q87f4MoJx3vJJsesCpwH6z69.jpg"
    ],
    "files": [
      {
        "id": "14JOVTfi4q87f4MoJx3vJJsesCpwH6z69",
        "name": "Luminária de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/14JOVTfi4q87f4MoJx3vJJsesCpwH6z69"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14JOVTfi4q87f4MoJx3vJJsesCpwH6z69",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 111,
      "printTimeHours": 5.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4430,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG",
    "number": 160,
    "folderName": "Luz Guia",
    "title": "Luz Guia",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG.jpg"
    ],
    "files": [
      {
        "id": "1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG",
        "name": "Luz Guia.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1h0QNcU_VBt3YjErO9PA00D5RxDRn-oHG",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 97,
      "printTimeHours": 2.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2503,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1gWfgxjCB2i0vcboagXvepZMcKZwzquB9",
    "number": 161,
    "folderName": "Mini Duende",
    "title": "Mini Duende",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gWfgxjCB2i0vcboagXvepZMcKZwzquB9.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1gWfgxjCB2i0vcboagXvepZMcKZwzquB9.jpg"
    ],
    "files": [
      {
        "id": "1gWfgxjCB2i0vcboagXvepZMcKZwzquB9",
        "name": "Mini Duende.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1gWfgxjCB2i0vcboagXvepZMcKZwzquB9"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gWfgxjCB2i0vcboagXvepZMcKZwzquB9",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 45,
      "printTimeHours": 5.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4985,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f",
    "number": 162,
    "folderName": "Mini Luminária Chapéu Seletor do Papai Noel",
    "title": "Mini Luminária Chapéu Seletor do Papai Noel",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f.jpeg"
    ],
    "files": [
      {
        "id": "1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f",
        "name": "Mini Luminária Chapéu Seletor do Papai Noel.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cgmMV1QMtZNy32k0yFAeNUdBc_RhrA5f",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 50,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3731,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M",
    "number": 163,
    "folderName": "Mini Papai Noel",
    "title": "Mini Papai Noel",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M.jpg"
    ],
    "files": [
      {
        "id": "1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M",
        "name": "Mini Papai Noel.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1F6U_xpgx74v551WTfqegFgJ_FFa-iN9M",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 72,
      "printTimeHours": 4.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3575,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_",
    "number": 164,
    "folderName": "Mini Papai Noel Flexível",
    "title": "Mini Papai Noel Flexível",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_.jpg"
    ],
    "files": [
      {
        "id": "1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_",
        "name": "Mini Papai Noel Flexível.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Wpp7qk1ljs_ulkTRQinoEXRBtvx_1P3_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 88,
      "printTimeHours": 2.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6487,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc",
    "number": 165,
    "folderName": "Monte sua Árvore de Natal sem Suporte",
    "title": "Monte sua Árvore de Natal sem Suporte",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc.jpeg"
    ],
    "files": [
      {
        "id": "15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc",
        "name": "Monte sua Árvore de Natal sem Suporte.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15vNOCfgXCT3cLjusGQQA0-4OF_oVm-Zc",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 125,
      "printTimeHours": 6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2219,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f",
    "number": 166,
    "folderName": "Monte sua Árvore de Natal sem Suporte (2)",
    "title": "Monte sua Árvore de Natal sem Suporte (2)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f.jpeg"
    ],
    "files": [
      {
        "id": "1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f",
        "name": "Monte sua Árvore de Natal sem Suporte (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vbb6U2swx-MsnCKmwaJfwLuq84jIhd6f",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 100,
      "printTimeHours": 5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6951,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX",
    "number": 167,
    "folderName": "Natal",
    "title": "Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX.jpg"
    ],
    "files": [
      {
        "id": "1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX",
        "name": "Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yXndvNBPdscoUMTI2DFWNkyDHKoTV0yX",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 87,
      "printTimeHours": 3.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2486,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E",
    "number": 168,
    "folderName": "Newt",
    "title": "Newt",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E.jpg"
    ],
    "files": [
      {
        "id": "1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E",
        "name": "Newt.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NXaaVI2iLrNUzNITgJvkDw0jzKixU__E",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 107,
      "printTimeHours": 3.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2408,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2",
    "number": 169,
    "folderName": "Papai Noel",
    "title": "Papai Noel",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2.jpg"
    ],
    "files": [
      {
        "id": "1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2",
        "name": "Papai Noel.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Wy7xoMbNHRt7KcuNFZ5CUEVCnMV1xzg2",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 90,
      "printTimeHours": 2.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6665,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH",
    "number": 170,
    "folderName": "Papai Noel (3)",
    "title": "Papai Noel (3)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH.jpeg"
    ],
    "files": [
      {
        "id": "11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH",
        "name": "Papai Noel (3).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11gqon9IJvPIYZ-N28oAZ0b_gSNYdaXUH",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 118,
      "printTimeHours": 7.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4278,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB",
    "number": 171,
    "folderName": "Papai Noel (4)",
    "title": "Papai Noel (4)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB.jpg"
    ],
    "files": [
      {
        "id": "1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB",
        "name": "Papai Noel (4).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1fU1AZ1fwD41u-vBuYd7d27QSqIMuThsB",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 118,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5031,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q",
    "number": 172,
    "folderName": "Papai Noel 6",
    "title": "Papai Noel 6",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q.jpg"
    ],
    "files": [
      {
        "id": "1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q",
        "name": "Papai Noel 6.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1l9dOzWHSGq_O9zf2lmld6G7EiCVRft-q",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 7.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6347,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU",
    "number": 173,
    "folderName": "Papai Noel 19",
    "title": "Papai Noel 19",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU.jpg"
    ],
    "files": [
      {
        "id": "1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU",
        "name": "Papai Noel 19.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1F8H7t1kU5D6lW-x0LWbu3zlSPtLDxGxU",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 129,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2391,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs",
    "number": 174,
    "folderName": "Papai Noel Clássico",
    "title": "Papai Noel Clássico",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs.jpeg"
    ],
    "files": [
      {
        "id": "1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs",
        "name": "Papai Noel Clássico.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1KgwAl-vnJ9HGRKV3QMGO0WPoHSI_4YZs",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 93,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3141,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2",
    "number": 175,
    "folderName": "Papai Noel de Crochê",
    "title": "Papai Noel de Crochê",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2.jpg"
    ],
    "files": [
      {
        "id": "1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2",
        "name": "Papai Noel de Crochê.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dlrqNZW5aHIl0LqAOTlr5YoBEZV4Ger2",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 119,
      "printTimeHours": 4.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3233,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70",
    "number": 176,
    "folderName": "Papai Noel de Crochê (2)",
    "title": "Papai Noel de Crochê (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70.jpg"
    ],
    "files": [
      {
        "id": "1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70",
        "name": "Papai Noel de Crochê (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1J6SQMiqsrRlCkRoFFx4ZeBPFgr_LWr70",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 47,
      "printTimeHours": 2.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2203,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1aGRieuvICnKZADLufu-MOIzOVXMsiI6s",
    "number": 177,
    "folderName": "Papai Noel e Trenó Flexível",
    "title": "Papai Noel e Trenó Flexível",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1aGRieuvICnKZADLufu-MOIzOVXMsiI6s.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1aGRieuvICnKZADLufu-MOIzOVXMsiI6s.jpeg"
    ],
    "files": [
      {
        "id": "1aGRieuvICnKZADLufu-MOIzOVXMsiI6s",
        "name": "Papai Noel e Trenó Flexível.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1aGRieuvICnKZADLufu-MOIzOVXMsiI6s"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1aGRieuvICnKZADLufu-MOIzOVXMsiI6s",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 101,
      "printTimeHours": 8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6204,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0",
    "number": 178,
    "folderName": "Papai Noel Gancho",
    "title": "Papai Noel Gancho",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0.jpeg"
    ],
    "files": [
      {
        "id": "1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0",
        "name": "Papai Noel Gancho.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Kse5q_FxbbBt-J7Tg-3AxxK_7fFtlBS0",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 57,
      "printTimeHours": 2.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2328,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07",
    "number": 179,
    "folderName": "Papai Noel Porta-Petiscos",
    "title": "Papai Noel Porta-Petiscos",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07.jpg"
    ],
    "files": [
      {
        "id": "1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07",
        "name": "Papai Noel Porta-Petiscos.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1kBfpSfRCK8aa1C8ihOGg6a7k9PWoVN07",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 114,
      "printTimeHours": 2.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6505,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A",
    "number": 180,
    "folderName": "Petisco de Rena",
    "title": "Petisco de Rena",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A.jpg"
    ],
    "files": [
      {
        "id": "128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A",
        "name": "Petisco de Rena.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/128fUoYL4Hjc2dYN0EXmjxHWlEkahR28A",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 55,
      "printTimeHours": 6.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6549,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk",
    "number": 181,
    "folderName": "Pilha de Diamantes Alternados",
    "title": "Pilha de Diamantes Alternados",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk.jpeg"
    ],
    "files": [
      {
        "id": "1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk",
        "name": "Pilha de Diamantes Alternados.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mNFn1fqz3QSh7dSVPDBg7AdjIEycY7Uk",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 104,
      "printTimeHours": 5.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3749,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut",
    "number": 182,
    "folderName": "Pingente",
    "title": "Pingente",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut.jpeg"
    ],
    "files": [
      {
        "id": "10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut",
        "name": "Pingente.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/10uDxTKROiWUIIjYC7U3yZmR2Q4sjnDut",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 82,
      "printTimeHours": 6.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5433,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2",
    "number": 183,
    "folderName": "Pingentes de Árvore de Natal 3 Flocos",
    "title": "Pingentes de Árvore de Natal 3 Flocos",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2.jpeg"
    ],
    "files": [
      {
        "id": "1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2",
        "name": "Pingentes de Árvore de Natal 3 Flocos.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1IL7VKMNbG5cvz83bdsqsswlcJ3Qh5WX2",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 99,
      "printTimeHours": 3.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2174,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP",
    "number": 184,
    "folderName": "Pinguim de Natal Flexível Chaveiro",
    "title": "Pinguim de Natal Flexível Chaveiro",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP.jpeg"
    ],
    "files": [
      {
        "id": "1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP",
        "name": "Pinguim de Natal Flexível Chaveiro.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Za1JfGfqOKcLN9DUtQI7ebRgeRQ822xP",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 122,
      "printTimeHours": 2.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5882,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR",
    "number": 185,
    "folderName": "Placa Feliz Natal",
    "title": "Placa Feliz Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR.jpeg"
    ],
    "files": [
      {
        "id": "1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR",
        "name": "Placa Feliz Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ziQDbn0Mpo8Tb-XDa0UEVqs6R9l3yERR",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 121,
      "printTimeHours": 3.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5497,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_",
    "number": 186,
    "folderName": "Pokémon",
    "title": "Pokémon",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_.jpg"
    ],
    "files": [
      {
        "id": "1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_",
        "name": "Pokémon.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1qYQPUCG1gKlEq2XxA6xVv5n1T8V9Z2s_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 91,
      "printTimeHours": 2.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4903,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w",
    "number": 187,
    "folderName": "Presente Cinderela",
    "title": "Presente Cinderela",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w.jpg"
    ],
    "files": [
      {
        "id": "1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w",
        "name": "Presente Cinderela.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1RoblFN6HFnIsx0Kp5kRYw5r_DqSvUQ6w",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 73,
      "printTimeHours": 6.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3038,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren",
    "number": 188,
    "folderName": "Presente Mini Impressão no Lugar",
    "title": "Presente Mini Impressão no Lugar",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren.jpeg"
    ],
    "files": [
      {
        "id": "1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren",
        "name": "Presente Mini Impressão no Lugar.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1MSsjFch4w-qNPYGWrA3uvx2U3uWmKren",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 110,
      "printTimeHours": 5.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3430,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv",
    "number": 189,
    "folderName": "Presente Transformável",
    "title": "Presente Transformável",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv.jpg"
    ],
    "files": [
      {
        "id": "1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv",
        "name": "Presente Transformável.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1oruMMKvE-gwmauthMoDJoxuKsKjFJKrv",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 127,
      "printTimeHours": 2.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2978,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo",
    "number": 190,
    "folderName": "Presentes",
    "title": "Presentes",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo.jpg"
    ],
    "files": [
      {
        "id": "1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo",
        "name": "Presentes.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1-mR3_Pft_z9J29h1Z-b8mYNEb_y3MHfo",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 41,
      "printTimeHours": 6.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5893,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH",
    "number": 191,
    "folderName": "Quebra-Cabeça Árvore de Natal",
    "title": "Quebra-Cabeça Árvore de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH.jpg"
    ],
    "files": [
      {
        "id": "1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH",
        "name": "Quebra-Cabeça Árvore de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BjdPOwy3GI4EXYtITVnRMxg1BEMr7BNH",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 122,
      "printTimeHours": 4.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4162,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY",
    "number": 192,
    "folderName": "Quebra-Cabeça Árvore de Natal (2)",
    "title": "Quebra-Cabeça Árvore de Natal (2)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY.jpg"
    ],
    "files": [
      {
        "id": "1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY",
        "name": "Quebra-Cabeça Árvore de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BYlrIT9RQLsE8xcdkPchf-uVz1E9RoQY",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 92,
      "printTimeHours": 4.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6433,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg",
    "number": 193,
    "folderName": "Quebra-Nozes",
    "title": "Quebra-Nozes",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg.jpg"
    ],
    "files": [
      {
        "id": "1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg",
        "name": "Quebra-Nozes.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1M2PY2K7mj4YL_FSu_gS-APwJCV3WR3Bg",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 114,
      "printTimeHours": 3.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3326,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh",
    "number": 194,
    "folderName": "Rena de Parede",
    "title": "Rena de Parede",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh.jpg"
    ],
    "files": [
      {
        "id": "1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh",
        "name": "Rena de Parede.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1fR6i1jmTF1Xl2MGW_4EeUNcy_A0EoaAh",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 62,
      "printTimeHours": 4.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4950,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ",
    "number": 195,
    "folderName": "Rena Deitada",
    "title": "Rena Deitada",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ.jpg"
    ],
    "files": [
      {
        "id": "1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ",
        "name": "Rena Deitada.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1SJi7iwnr_VtlmTMyuQup8DbZmNPw4-HQ",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 112,
      "printTimeHours": 5.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3506,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1mW5YU2D6YprV93MfubDn6UTrY3Omycyq",
    "number": 196,
    "folderName": "Rena Flexível Fofa",
    "title": "Rena Flexível Fofa",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Articulado",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mW5YU2D6YprV93MfubDn6UTrY3Omycyq.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mW5YU2D6YprV93MfubDn6UTrY3Omycyq.jpg"
    ],
    "files": [
      {
        "id": "1mW5YU2D6YprV93MfubDn6UTrY3Omycyq",
        "name": "Rena Flexível Fofa.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1mW5YU2D6YprV93MfubDn6UTrY3Omycyq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mW5YU2D6YprV93MfubDn6UTrY3Omycyq",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 77,
      "printTimeHours": 7.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3459,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi",
    "number": 197,
    "folderName": "Ruben de Natal",
    "title": "Ruben de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi.jpg"
    ],
    "files": [
      {
        "id": "1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi",
        "name": "Ruben de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Kz3mgv5swje3eX2VjWeiKv-PrY3vlfIi",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 129,
      "printTimeHours": 5.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6478,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh",
    "number": 198,
    "folderName": "Ruben de Rick and Morty",
    "title": "Ruben de Rick and Morty",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh.jpeg"
    ],
    "files": [
      {
        "id": "1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh",
        "name": "Ruben de Rick and Morty.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1nM8onEcJHwvFH5XS5xkJF8Bd16ZGeoJh",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 121,
      "printTimeHours": 5.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5354,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI",
    "number": 199,
    "folderName": "S2",
    "title": "S2",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI.jpg"
    ],
    "files": [
      {
        "id": "1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI",
        "name": "S2.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1R016zCj1sSRhqeOZByKRPeLRqZQZq5NI",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 55,
      "printTimeHours": 6.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4154,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV",
    "number": 200,
    "folderName": "Sala de Presentes de Natal",
    "title": "Sala de Presentes de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV.jpg"
    ],
    "files": [
      {
        "id": "1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV",
        "name": "Sala de Presentes de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mvRjx70_Lm3ElQf-OX49cJnfhcxvMkHV",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 72,
      "printTimeHours": 3.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4405,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc",
    "number": 201,
    "folderName": "Satan Claus",
    "title": "Satan Claus",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc.jpg"
    ],
    "files": [
      {
        "id": "15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc",
        "name": "Satan Claus.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15HEKSrSFBwoEW4s_awcFCQuqAw8HZUOc",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 121,
      "printTimeHours": 2.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2298,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2",
    "number": 202,
    "folderName": "Simpsons de Natal Fofo",
    "title": "Simpsons de Natal Fofo",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2.jpg"
    ],
    "files": [
      {
        "id": "1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2",
        "name": "Simpsons de Natal Fofo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1L-tFQY1RIGaK42iLfYXFe-YjXXtD1Wc2",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 4.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5549,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue",
    "number": 203,
    "folderName": "Sr Crumbles",
    "title": "Sr Crumbles",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue.jpg"
    ],
    "files": [
      {
        "id": "11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue",
        "name": "Sr Crumbles.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11sPvQd-5jAbpV2jU33K3VnsVhkSQ98Ue",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 61,
      "printTimeHours": 4.8,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5568,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1AImxw-mpF59eW5XazrTbAWbZosfl2xIp",
    "number": 204,
    "folderName": "Staryu Voronoi Estrela de Árvore",
    "title": "Staryu Voronoi Estrela de Árvore",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AImxw-mpF59eW5XazrTbAWbZosfl2xIp.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AImxw-mpF59eW5XazrTbAWbZosfl2xIp.jpeg"
    ],
    "files": [
      {
        "id": "1AImxw-mpF59eW5XazrTbAWbZosfl2xIp",
        "name": "Staryu Voronoi Estrela de Árvore.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1AImxw-mpF59eW5XazrTbAWbZosfl2xIp"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AImxw-mpF59eW5XazrTbAWbZosfl2xIp",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 112,
      "printTimeHours": 5.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6264,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx",
    "number": 205,
    "folderName": "Super Estrela",
    "title": "Super Estrela",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Decoração",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx.jpg"
    ],
    "files": [
      {
        "id": "1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx",
        "name": "Super Estrela.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BeSkAweYg2jCKJh6vh0BTVjn1QIyEnHx",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 94,
      "printTimeHours": 7.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2829,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G",
    "number": 206,
    "folderName": "Suporte de Celular Rena",
    "title": "Suporte de Celular Rena",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G.jpg"
    ],
    "files": [
      {
        "id": "1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G",
        "name": "Suporte de Celular Rena.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1qR7QSqFWmv9IzlpS2Y2CrbwSdq2upK0G",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 76,
      "printTimeHours": 3.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3114,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh",
    "number": 207,
    "folderName": "Texto Feliz Natal",
    "title": "Texto Feliz Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh.jpg"
    ],
    "files": [
      {
        "id": "19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh",
        "name": "Texto Feliz Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/19x0WgfVettz2QXj_cm8CtEVX_c4HYjQh",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 84,
      "printTimeHours": 2.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4269,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq",
    "number": 208,
    "folderName": "Tigela de Natal",
    "title": "Tigela de Natal",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq.jpg"
    ],
    "files": [
      {
        "id": "1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq",
        "name": "Tigela de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AFgQNnzUEI5XP2ig2Om1Q62Ve7DrqAcq",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 57,
      "printTimeHours": 4.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5095,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J",
    "number": 209,
    "folderName": "Trem de Inverno",
    "title": "Trem de Inverno",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J.jpg"
    ],
    "files": [
      {
        "id": "1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J",
        "name": "Trem de Inverno.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1v1F0ZaomtxV6VVYDE7_mFQxNXjJ3pj3J",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 77,
      "printTimeHours": 7.2,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2364,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_",
    "number": 210,
    "folderName": "Trenó do Papai Noel (2)",
    "title": "Trenó do Papai Noel (2)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_.jpeg"
    ],
    "files": [
      {
        "id": "1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_",
        "name": "Trenó do Papai Noel (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1bo4zv4h-mHqBNHITwvJOnupx6kLo3Df_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 74,
      "printTimeHours": 2.1,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6520,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB",
    "number": 211,
    "folderName": "Trenó do Papai Noel (4)",
    "title": "Trenó do Papai Noel (4)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB.jpg"
    ],
    "files": [
      {
        "id": "12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB",
        "name": "Trenó do Papai Noel (4).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12JkUgrNsGS1rVCc6ScJfSVrHHaEmeTxB",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 95,
      "printTimeHours": 5.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5474,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT",
    "number": 212,
    "folderName": "Trenó Feliz",
    "title": "Trenó Feliz",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT.jpeg"
    ],
    "files": [
      {
        "id": "1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT",
        "name": "Trenó Feliz.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BfCaNnPz_srgvVoETvc0BNGtIuFU0dAT",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 80,
      "printTimeHours": 5.9,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5470,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1xWArQO8xhKTzD289-2fJbcY-kEIYPGre",
    "number": 213,
    "folderName": "Ursinho de Pelúcia",
    "title": "Ursinho de Pelúcia",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1xWArQO8xhKTzD289-2fJbcY-kEIYPGre.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1xWArQO8xhKTzD289-2fJbcY-kEIYPGre.jpg"
    ],
    "files": [
      {
        "id": "1xWArQO8xhKTzD289-2fJbcY-kEIYPGre",
        "name": "Ursinho de Pelúcia.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1xWArQO8xhKTzD289-2fJbcY-kEIYPGre"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1xWArQO8xhKTzD289-2fJbcY-kEIYPGre",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 58,
      "printTimeHours": 2.7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5523,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO",
    "number": 214,
    "folderName": "Urso de Natal (2)",
    "title": "Urso de Natal (2)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO.jpg"
    ],
    "files": [
      {
        "id": "1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO",
        "name": "Urso de Natal (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HIEIkJ65zMkfsLTToe1GJeji_QuUkTBO",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 84,
      "printTimeHours": 5.4,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2408,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u",
    "number": 215,
    "folderName": "Urso de Neve",
    "title": "Urso de Neve",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u.jpg"
    ],
    "files": [
      {
        "id": "1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u",
        "name": "Urso de Neve.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1iWTyKgNdmUXAeQP3OvlnUzhbJh_gJy_u",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 67,
      "printTimeHours": 3.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3573,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep",
    "number": 216,
    "folderName": "Urso Polar (2)",
    "title": "Urso Polar (2)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep.jpg"
    ],
    "files": [
      {
        "id": "1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep",
        "name": "Urso Polar (2).stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1A_yyXRscn6vC3V-rxFOXRblm5rVTkNep",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 72,
      "printTimeHours": 4.5,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5466,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF",
    "number": 217,
    "folderName": "Vaso Árvore",
    "title": "Vaso Árvore",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF.jpg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF.jpg"
    ],
    "files": [
      {
        "id": "16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF",
        "name": "Vaso Árvore.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/16R__2Y-Agt_8jTpwbcazAtNNWz9B3NrF",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 49,
      "printTimeHours": 7,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2942,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc",
    "number": 218,
    "folderName": "Vela Derretendo",
    "title": "Vela Derretendo",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Porta-Vela",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc.jpeg"
    ],
    "files": [
      {
        "id": "1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc",
        "name": "Vela Derretendo.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cnHakkAyo_cjQgu4MYeC4ZwnKhQJ6NNc",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 64,
      "printTimeHours": 3.6,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4562,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu",
    "number": 219,
    "folderName": "Velas LED de Natal",
    "title": "Velas LED de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Porta-Vela",
    "imageUrl": "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu.jpeg",
    "additionalImages": [
      "https://skbfndhnmoebwmcfvdvw.supabase.co/storage/v1/object/public/covers/items/f7b42beb-34f4-4665-9934-626650e84bd6/1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu.jpeg"
    ],
    "files": [
      {
        "id": "1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu",
        "name": "Velas LED de Natal.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1liZ5eDiC2UMe3N44_qeJOkIuBt0cBgvu",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 54,
      "printTimeHours": 4.3,
      "filament": "PLA Premium / Silk",
      "infill": "15% Giroide",
      "supports": "Conforme modelo (Sem suportes / Árvore)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4972,
    "isNew": false,
    "description": "Arquivo STL profissional do Pack Natalino. Projeto completo disponível na pasta Google Drive com alta resolução e pronto para impressão 3D."
  },
  {
    "id": "1vQtXlmwY08B71ps54YGGzW_niAiRYbm_",
    "number": 220,
    "folderName": "Árvore de Natal Pequena",
    "title": "Árvore de Natal Pequena",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1HRJjzq5XIBO8bAjrN6ySq9_-AXxi6Mws=w600",
    "additionalImages": [
      "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80"
    ],
    "files": [
      {
        "id": "1vQtXlmwY08B71ps54YGGzW_niAiRYbm_",
        "name": "Árvore de Natal Pequena.stl",
        "downloadUrl": "https://drive.google.com/drive/folders/1vQtXlmwY08B71ps54YGGzW_niAiRYbm_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vQtXlmwY08B71ps54YGGzW_niAiRYbm_",
    "hasRealCover": true,
    "specs": {
      "weightGrams": 51,
      "printTimeHours": 3.2,
      "filament": "PLA Natal / Silk Dourado",
      "infill": "15% Giroide",
      "supports": "Automático / Árvore",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2705,
    "isNew": false,
    "description": "Arquivo STL 3D de alta qualidade do Pack Natalino. Acesso completo aos arquivos originais via Google Drive pronto para fatiamento."
  }
];

export const CHRISTMAS_CATEGORIES = [
  { id: "all", label: "Início (Todos os Modelos)", count: 220, icon: "Sparkles" },
  { id: "papai_noel", label: "Papai Noel & Figuras", count: 45, icon: "User" },
  { id: "arvores", label: "Árvores & Pinheiros", count: 41, icon: "Trees" },
  { id: "renas", label: "Renas & Animais", count: 25, icon: "Compass" },
  { id: "luminarias", label: "Luminárias & Decoração", count: 19, icon: "Sun" },
  { id: "presepios", label: "Presépios & Sagrado", count: 1, icon: "Church" },
  { id: "utilidades", label: "Cortadores & Acessórios", count: 89, icon: "Layers" },
] as const;
