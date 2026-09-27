/**
 * Acervo Oficial com os 100 Modelos Natalinos do Google Drive
 * Pasta: https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link
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
  specs: DriveModelSpecs;
  downloadsCount: number;
  isNew: boolean;
  description: string;
}

export const CHRISTMAS_MODELS: ChristmasModel[] = [
  {
    "id": "1ZKXzjZOF1Am8HDXZbhozyU-jlOkRaC6H",
    "number": 1,
    "folderName": "Angel Keychain",
    "title": "Chaveiro Anjo Natalino",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Chaveiro",
    "imageUrl": "https://lh3.googleusercontent.com/d/1KqTYRw5R5cBLi2g4i_4htXUNQ1pqFgns=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1KqTYRw5R5cBLi2g4i_4htXUNQ1pqFgns=w800"
    ],
    "files": [
      {
        "id": "1gxwO0oVo4Fofhn80cmlUrDpzBS1Fq61v",
        "name": "keychain-angel (2).stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gxwO0oVo4Fofhn80cmlUrDpzBS1Fq61v"
      },
      {
        "id": "1ATSmkwrlXSZTpI0bH5o4EBB01ZQLyDuj",
        "name": "keychain-angel.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ATSmkwrlXSZTpI0bH5o4EBB01ZQLyDuj"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ZKXzjZOF1Am8HDXZbhozyU-jlOkRaC6H",
    "specs": {
      "weightGrams": 48,
      "printTimeHours": 3,
      "filament": "PLA Silk Mármore / Ouro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1200,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1ROs10k7gdp5cNPORAUpL8D3Qt_MCc1JL",
    "number": 2,
    "folderName": "Big Pixel Star",
    "title": "Estrela Pixelada 3D para Topo de Árvore",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1HXw34AP4sjDXjHu4Yr5mg_sPPkAJGECd=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1HXw34AP4sjDXjHu4Yr5mg_sPPkAJGECd=w800"
    ],
    "files": [
      {
        "id": "1kICpFVTKs9BIWqxZsZH1V0eMB5lY9lso",
        "name": "big_pixel_star.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kICpFVTKs9BIWqxZsZH1V0eMB5lY9lso"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ROs10k7gdp5cNPORAUpL8D3Qt_MCc1JL",
    "specs": {
      "weightGrams": 85,
      "printTimeHours": 4.5,
      "filament": "PETG / PLA Translúcido Cristal",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1477,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1hdskWfQbwr4G32IThT9VTBqXJ-x9fWiv",
    "number": 3,
    "folderName": "Bonhomme",
    "title": "Boneco de Neve Clássico (Bonhomme de Neige)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1UMeUMfKWnPKoikZNruL6AMvmyCPPwbiZ=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1UMeUMfKWnPKoikZNruL6AMvmyCPPwbiZ=w800"
    ],
    "files": [
      {
        "id": "1Xq61EtIsHMEnbed-rEhzGT_E0lrDqnwx",
        "name": "bonhomme_de_neige_40_mms.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xq61EtIsHMEnbed-rEhzGT_E0lrDqnwx"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hdskWfQbwr4G32IThT9VTBqXJ-x9fWiv",
    "specs": {
      "weightGrams": 122,
      "printTimeHours": 9.4,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1754,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1uJmg5JOPqAthMUjRlsf2Cfn5Alh772O_",
    "number": 4,
    "folderName": "BTB",
    "title": "Guerreira Natalina Genasi (Bite the Bullet - BTB)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Miniatura",
    "imageUrl": "https://lh3.googleusercontent.com/d/1PvyjwJwzdg9MjkT7Teexz9R8lzczsuUp=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1PvyjwJwzdg9MjkT7Teexz9R8lzczsuUp=w800"
    ],
    "files": [
      {
        "id": "1gCPD8LF9iplw0YlbKXOq-b6bCz4RWB4s",
        "name": "BTB+12_21-06+GENASI.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gCPD8LF9iplw0YlbKXOq-b6bCz4RWB4s"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uJmg5JOPqAthMUjRlsf2Cfn5Alh772O_",
    "specs": {
      "weightGrams": 159,
      "printTimeHours": 10.6,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2031,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "16Dvp_dMjmxfOa6VkYf0uRXTgWAUbDm-6",
    "number": 5,
    "folderName": "Chilly Willy",
    "title": "Pinguim Chilly Willy Natalino (PlaKit)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1lX6oKdGoKRWyhhB1uHfMgYlF-8wO37ss=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1lX6oKdGoKRWyhhB1uHfMgYlF-8wO37ss=w800"
    ],
    "files": [
      {
        "id": "1_xiEi976eruWqT0vyt9FDK2HCVyKIcww",
        "name": "PlaKit_Chilly_Willy.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_xiEi976eruWqT0vyt9FDK2HCVyKIcww"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/16Dvp_dMjmxfOa6VkYf0uRXTgWAUbDm-6",
    "specs": {
      "weightGrams": 196,
      "printTimeHours": 11.1,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2308,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1h-1K13N7DAPSzdeQvHa0zgkWSMHJ3vWO",
    "number": 6,
    "folderName": "Chistmas Present Room",
    "title": "Cenário Quarto de Presentes de Natal",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/12FQTc_keKjKOrJqcdq0OQsI1qv0ZySh9=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/12FQTc_keKjKOrJqcdq0OQsI1qv0ZySh9=w800"
    ],
    "files": [
      {
        "id": "150H-EbTthtuELs7pfHjh349gIbSormS2",
        "name": "Christmas+present+room.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=150H-EbTthtuELs7pfHjh349gIbSormS2"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1h-1K13N7DAPSzdeQvHa0zgkWSMHJ3vWO",
    "specs": {
      "weightGrams": 53,
      "printTimeHours": 4.2,
      "filament": "PETG / PLA Translúcido Cristal",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2585,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1Py9XhkQOIwtYkTl8nn_CspM_FN14EX6L",
    "number": 7,
    "folderName": "Christmas",
    "title": "Presépio Sagrada Família Completo com Arco e Estrela",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Presépio",
    "imageUrl": "https://lh3.googleusercontent.com/d/1KC8KG0Ab_GHYz6Y8HNI0OE5FoVDiCpov=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1KC8KG0Ab_GHYz6Y8HNI0OE5FoVDiCpov=w800"
    ],
    "files": [
      {
        "id": "11kWF7tWbCrqZJyWLvwNzuVfHZ168WDV-",
        "name": "ARCO NUEVO.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11kWF7tWbCrqZJyWLvwNzuVfHZ168WDV-"
      },
      {
        "id": "14Gl0dBQ4hWlyu_zl2Ep1VN8aEcop8Nqk",
        "name": "BASE INFERIOR NUEVA.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14Gl0dBQ4hWlyu_zl2Ep1VN8aEcop8Nqk"
      },
      {
        "id": "1HbKymgqpt2HZVfRJqHmhvvUeJ5pp5rU-",
        "name": "BASE SUPERIOR NUEVA.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HbKymgqpt2HZVfRJqHmhvvUeJ5pp5rU-"
      },
      {
        "id": "1YgAqfk2BdGJvFZqQJOLQjm_mzQyLeNAL",
        "name": "CUNA.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YgAqfk2BdGJvFZqQJOLQjm_mzQyLeNAL"
      },
      {
        "id": "1XJ245WXb_na50XfS2zhOP4-xc8_HbDYV",
        "name": "ESTRELLA.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XJ245WXb_na50XfS2zhOP4-xc8_HbDYV"
      },
      {
        "id": "12HDr0CFC-A9y0J_ztTj9BpcnlcmM-mSV",
        "name": "JOSE.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12HDr0CFC-A9y0J_ztTj9BpcnlcmM-mSV"
      },
      {
        "id": "1DqWNm1QF4TtRqW-CV3d278gKQy-vtanl",
        "name": "MARIA.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DqWNm1QF4TtRqW-CV3d278gKQy-vtanl"
      },
      {
        "id": "1ZrQ8f60b7juLW61YIidy2QwP_HmXH3qo",
        "name": "NIÑO JESUS.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZrQ8f60b7juLW61YIidy2QwP_HmXH3qo"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Py9XhkQOIwtYkTl8nn_CspM_FN14EX6L",
    "specs": {
      "weightGrams": 90,
      "printTimeHours": 6.3,
      "filament": "PLA Silk Mármore / Ouro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2862,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1CT5KND-uoN2xlOTTvb-R7iREfLlyVNMP",
    "number": 8,
    "folderName": "Christmas Miniatures",
    "title": "Kit Miniaturas Oficina do Dragão Natalino",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Miniatura",
    "imageUrl": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1CT5KND-uoN2xlOTTvb-R7iREfLlyVNMP",
    "specs": {
      "weightGrams": 127,
      "printTimeHours": 7.6,
      "filament": "PLA Silk Mármore / Ouro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3139,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1uViHBPNsAL4wUk8GUb5fuMaCSEjERHpV",
    "number": 9,
    "folderName": "Christmas Tree",
    "title": "Árvore de Natal Modular Fatiada em Camadas",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Montável",
    "imageUrl": "https://lh3.googleusercontent.com/d/1JLMoaqn-7RgEZ0puQgZZPFZ8f7EaafUa=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1JLMoaqn-7RgEZ0puQgZZPFZ8f7EaafUa=w800",
      "https://lh3.googleusercontent.com/d/1LPimg72XhIwxTZUA7JaPprrqIbhA8dWD=w800",
      "https://lh3.googleusercontent.com/d/1OmZomiCRaZRI1S0m8x1uGJ-E9tlDPoxb=w800"
    ],
    "files": [
      {
        "id": "1p88EoDgYs_BsngP1u0PuzZYsoee2PjQt",
        "name": "Build your own Christmas Tree no support needed.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p88EoDgYs_BsngP1u0PuzZYsoee2PjQt"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uViHBPNsAL4wUk8GUb5fuMaCSEjERHpV",
    "specs": {
      "weightGrams": 164,
      "printTimeHours": 13.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3416,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1kkmPlp2rP2--tFu5Fx1lLWSK6I58qNQj",
    "number": 10,
    "folderName": "Christmas Tree 2",
    "title": "Conjunto de Pinheiros de Natal Esculpidos (Set Completo)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1x27qqYGCKYYut7c_y7L4VMMAUuGPQeQN=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1x27qqYGCKYYut7c_y7L4VMMAUuGPQeQN=w800"
    ],
    "files": [
      {
        "id": "1woEBU7_P1yLlvB2a96ZjPNR4d7E824YW",
        "name": "christmas-tree-set-model_files.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1woEBU7_P1yLlvB2a96ZjPNR4d7E824YW"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1kkmPlp2rP2--tFu5Fx1lLWSK6I58qNQj",
    "specs": {
      "weightGrams": 201,
      "printTimeHours": 14.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3693,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1v6ArhBK1gZsYE7Lp0pk4_eEZplbLUCRH",
    "number": 11,
    "folderName": "Christmas Tree 3",
    "title": "Árvore de Natal Decorativa Estilizada",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1T075aXS51AOkgVY-du--uUMMnmw1Q3pR=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1T075aXS51AOkgVY-du--uUMMnmw1Q3pR=w800"
    ],
    "files": [
      {
        "id": "13CEWM-gP_iZ9MqIpgSJG0Ho97L0Q4ru3",
        "name": "Christmas Tree.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13CEWM-gP_iZ9MqIpgSJG0Ho97L0Q4ru3"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1v6ArhBK1gZsYE7Lp0pk4_eEZplbLUCRH",
    "specs": {
      "weightGrams": 58,
      "printTimeHours": 3.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3970,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "15soCvrn8tf7tbc4h2epQbEKzz0kdtNoz",
    "number": 12,
    "folderName": "Christmas Tree 4",
    "title": "Árvore de Natal em Ramos Espirais (Vine Tree)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1pJPwzwVUYt7oyZCoWtzN91OfR9W7yIvk=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1pJPwzwVUYt7oyZCoWtzN91OfR9W7yIvk=w800"
    ],
    "files": [
      {
        "id": "15RcMvnaU6oOO2CL54k573YFFRLgWAHa7",
        "name": "Vine Christmas Tree_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15RcMvnaU6oOO2CL54k573YFFRLgWAHa7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15soCvrn8tf7tbc4h2epQbEKzz0kdtNoz",
    "specs": {
      "weightGrams": 95,
      "printTimeHours": 5.1,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4247,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1M8eW4BqHFI7aDVGEJVtptl9Fv2wPgAtb",
    "number": 13,
    "folderName": "Christmas Tree 5",
    "title": "Árvore de Natal com Caixas de Presentes",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/10LcCJmVRyJBPRugQ-C_Zx3rrfjUYvmDI=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/10LcCJmVRyJBPRugQ-C_Zx3rrfjUYvmDI=w800",
      "https://lh3.googleusercontent.com/d/1QIkwiaFPohqHFU8OSyKzIU6-GJAx10Un=w800"
    ],
    "files": [
      {
        "id": "18C8LlGIDC3NMQjMWAVL926NSg8S7JTfa",
        "name": "christmas-tree-2.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18C8LlGIDC3NMQjMWAVL926NSg8S7JTfa"
      },
      {
        "id": "1RSNPGHf1FCuVjsNoymlSISGZs8PZP505",
        "name": "regalos-navidad-christmas-gifts.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RSNPGHf1FCuVjsNoymlSISGZs8PZP505"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1M8eW4BqHFI7aDVGEJVtptl9Fv2wPgAtb",
    "specs": {
      "weightGrams": 132,
      "printTimeHours": 10.1,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4524,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1ZNAQp0v6QobZIiLl1zQypEtQQBiEAki5",
    "number": 14,
    "folderName": "Christmas Tree 6",
    "title": "Árvore de Natal Fitness com Anilhas e Halteres (Gym)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Temático",
    "imageUrl": "https://lh3.googleusercontent.com/d/1OyCRbE5bj6-VcsKe_XCd50tyefaKP2ZE=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1OyCRbE5bj6-VcsKe_XCd50tyefaKP2ZE=w800"
    ],
    "files": [
      {
        "id": "1SeUaFTm_MtSV0wK-_an1g9uXpQie1pDj",
        "name": "arbol-de-navidad-gym-pesas_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SeUaFTm_MtSV0wK-_an1g9uXpQie1pDj"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ZNAQp0v6QobZIiLl1zQypEtQQBiEAki5",
    "specs": {
      "weightGrams": 169,
      "printTimeHours": 11.3,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4801,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1WwfvydUN_xdUjTb2GaBzeTYyuLnHZreK",
    "number": 15,
    "folderName": "Christmas Tree 7",
    "title": "Árvore de Natal com Cofre Secreto (Secret Stasher)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Cofre",
    "imageUrl": "https://lh3.googleusercontent.com/d/1y3rsSO-isbi5LrNOqKxsohXt64KZTRyl=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1y3rsSO-isbi5LrNOqKxsohXt64KZTRyl=w800"
    ],
    "files": [
      {
        "id": "1g8iVq9Dt3pEenle_SUYnH5NbtUO3l7dp",
        "name": "6706_Christmas Tree Secret Stasher.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1g8iVq9Dt3pEenle_SUYnH5NbtUO3l7dp"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WwfvydUN_xdUjTb2GaBzeTYyuLnHZreK",
    "specs": {
      "weightGrams": 206,
      "printTimeHours": 11.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5078,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "11OWN6ztmZJK4sfOhtTMhK8h5jxYyV4_2",
    "number": 16,
    "folderName": "Christmas Tree 8",
    "title": "Árvore de Natal Espiral Estilizada (Zou3D)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1BMnyufdT31tmWO1f1xhwuaZY0BAMn5ML=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1BMnyufdT31tmWO1f1xhwuaZY0BAMn5ML=w800"
    ],
    "files": [
      {
        "id": "1zfepjcxFK2oY85AZiucAyW3YQZyQ1B9-",
        "name": "Zou_tree_christmas.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zfepjcxFK2oY85AZiucAyW3YQZyQ1B9-"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11OWN6ztmZJK4sfOhtTMhK8h5jxYyV4_2",
    "specs": {
      "weightGrams": 63,
      "printTimeHours": 5,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5355,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1vqOCsQlhSWmBD2HCrmN6inmJDJoYr4h6",
    "number": 17,
    "folderName": "Christmas Tree 9",
    "title": "Árvore de Natal com Vila Natalina Esculpida (Village)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/1eOexcncdzuK5BRPNJkBd83C_jdihRlPr=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1eOexcncdzuK5BRPNJkBd83C_jdihRlPr=w800"
    ],
    "files": [
      {
        "id": "1fUVNiTrW6BXOsD8zHXhfNCXKbUrOQADK",
        "name": "Christmas_Tree_Village.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fUVNiTrW6BXOsD8zHXhfNCXKbUrOQADK"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vqOCsQlhSWmBD2HCrmN6inmJDJoYr4h6",
    "specs": {
      "weightGrams": 100,
      "printTimeHours": 7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5632,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1457qNpKG9KO2enWIB6OMJCD6kzL26-Gm",
    "number": 18,
    "folderName": "Christmas Tree 10",
    "title": "Pinheiro de Natal Realista Clássico (Pine Tree)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1GO3NBmVCSWxubftQrFg4V3RMV6qACKhW=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1GO3NBmVCSWxubftQrFg4V3RMV6qACKhW=w800"
    ],
    "files": [
      {
        "id": "1Mq2hWXCnx5FTd7ZRZusc3YQxSwYOjfDW",
        "name": "Christmas_Tree__Pine_Tree_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Mq2hWXCnx5FTd7ZRZusc3YQxSwYOjfDW"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1457qNpKG9KO2enWIB6OMJCD6kzL26-Gm",
    "specs": {
      "weightGrams": 137,
      "printTimeHours": 8.2,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5909,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1EufRBykUPTgKzQn6J8l9J0WWRVCWz8xz",
    "number": 19,
    "folderName": "Christmas Tree 11",
    "title": "Kit Card Enfeite de Árvore Evergreen",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Kit Card",
    "imageUrl": "https://lh3.googleusercontent.com/d/1QErdhsWHORbMU_pCE-GdjuhSqduXBqSc=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1QErdhsWHORbMU_pCE-GdjuhSqduXBqSc=w800"
    ],
    "files": [
      {
        "id": "1PvPbQDd1WjC6GR5vWOPQQjZu50SB9yKU",
        "name": "Evergreen+Tree+Christmas+Ornament+on+Card.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PvPbQDd1WjC6GR5vWOPQQjZu50SB9yKU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1EufRBykUPTgKzQn6J8l9J0WWRVCWz8xz",
    "specs": {
      "weightGrams": 174,
      "printTimeHours": 14.5,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6186,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1KKdK8M8eAK4qPuTJWHzFWxeouXIs1Wbk",
    "number": 20,
    "folderName": "Christmas Tree 12",
    "title": "Árvore de Natal com Encaixe Duplo Bicolor",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Encaixe",
    "imageUrl": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [
      {
        "id": "1r6wO7rYL7gKJVhGd6OHzHk56kQyRXuj4",
        "name": "Christmas_Tree_Inset_3.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1r6wO7rYL7gKJVhGd6OHzHk56kQyRXuj4"
      },
      {
        "id": "1k56pMiZwL1_97eJ5xiUpdwLQIUMBMlGx",
        "name": "Christmas_Tree_Out_2.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1k56pMiZwL1_97eJ5xiUpdwLQIUMBMlGx"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1KKdK8M8eAK4qPuTJWHzFWxeouXIs1Wbk",
    "specs": {
      "weightGrams": 211,
      "printTimeHours": 15.5,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6463,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "14CrsPHddtokUVcTBZGWfVfOJTUpfuckQ",
    "number": 21,
    "folderName": "Christmas Tree 13",
    "title": "Pinheiro de Natal Nórdico Geométrico Minimalista",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1lUZdlzOcbLk6E-BSPCWETfnEnQNHi2dA=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1lUZdlzOcbLk6E-BSPCWETfnEnQNHi2dA=w800"
    ],
    "files": [
      {
        "id": "1SDMBmuqFKtv73DXAssGtuimLDdkatT3S",
        "name": "1706. Christmas tree.STL",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SDMBmuqFKtv73DXAssGtuimLDdkatT3S"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14CrsPHddtokUVcTBZGWfVfOJTUpfuckQ",
    "specs": {
      "weightGrams": 68,
      "printTimeHours": 4.3,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6740,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "109_nUYVzG21PqTiomoXCyILavYhlbkEp",
    "number": 22,
    "folderName": "Christmas Tree 14",
    "title": "Bolinha de Natal Pingente Coração com Rena",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1W93H_8MrqYgNlfcWTlY7GNHWZwJVNA_W=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1W93H_8MrqYgNlfcWTlY7GNHWZwJVNA_W=w800"
    ],
    "files": [
      {
        "id": "1QA95Q8rfH7aY2OvRKPEdA_oacsI454od",
        "name": "Reindeer Heart Bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QA95Q8rfH7aY2OvRKPEdA_oacsI454od"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/109_nUYVzG21PqTiomoXCyILavYhlbkEp",
    "specs": {
      "weightGrams": 105,
      "printTimeHours": 5.6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7017,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1njrmftPrmcSdCeeaZloMDQD95tgaO63U",
    "number": 23,
    "folderName": "Christmas Tree 15",
    "title": "Enfeite Árvore Presépio Sagrada Família (Christmas Birth)",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Presépio",
    "imageUrl": "https://lh3.googleusercontent.com/d/1mlqafph1ao4vm5QUMrkp6l5VOVTvFEH_=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1mlqafph1ao4vm5QUMrkp6l5VOVTvFEH_=w800"
    ],
    "files": [
      {
        "id": "1tTFD_TLjxFzABUrD2l-mYZUSZnk3rB5l",
        "name": "Christmas Birth - STL 3D Portugal.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tTFD_TLjxFzABUrD2l-mYZUSZnk3rB5l"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1njrmftPrmcSdCeeaZloMDQD95tgaO63U",
    "specs": {
      "weightGrams": 142,
      "printTimeHours": 10.9,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7294,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1g3OU0Xzbj0s2f1VMK5UmXFUTtADKVaGn",
    "number": 24,
    "folderName": "Christmas Tree 16",
    "title": "Enfeite Árvore de Natal com Bolinhas Decorativas",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1dz8d29i21kct99c3IXHG0367fGF79a2f=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1dz8d29i21kct99c3IXHG0367fGF79a2f=w800"
    ],
    "files": [
      {
        "id": "1QesU8bt0H7aRyiKhSK1Cjadj2-TUCzDv",
        "name": "Christmas tree and baubles ornament.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QesU8bt0H7aRyiKhSK1Cjadj2-TUCzDv"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1g3OU0Xzbj0s2f1VMK5UmXFUTtADKVaGn",
    "specs": {
      "weightGrams": 179,
      "printTimeHours": 11.9,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7571,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1_JQ_DrbPYgHynJWup3hCZrQcBCsKCi-n",
    "number": 25,
    "folderName": "Christmas Tree 17",
    "title": "Bolinha de Natal Pingente com Árvore Interna",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1OCWCx_JBfJwe5zPtPfadOE0L4lqv_9PN=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1OCWCx_JBfJwe5zPtPfadOE0L4lqv_9PN=w800"
    ],
    "files": [
      {
        "id": "1HvSXf41FEskSk8gLs8is47Bzl4aGSPQD",
        "name": "Christmas Tree Bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HvSXf41FEskSk8gLs8is47Bzl4aGSPQD"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_JQ_DrbPYgHynJWup3hCZrQcBCsKCi-n",
    "specs": {
      "weightGrams": 36,
      "printTimeHours": 2,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7848,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1iOv5bLNb04oC0nFMhjWTph2kgNBCrJrF",
    "number": 26,
    "folderName": "Christmas Tree 18",
    "title": "Árvore Expositora para Bolinhas de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Expositor",
    "imageUrl": "https://lh3.googleusercontent.com/d/1JnMtA8yaFGm5K2HYDM7cBL4YZEk6Zfib=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1JnMtA8yaFGm5K2HYDM7cBL4YZEk6Zfib=w800"
    ],
    "files": [
      {
        "id": "1wQAgPvddovN9CIe65dpkvIt5wHhvhJu_",
        "name": "Christmas Bauble Display Tree.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wQAgPvddovN9CIe65dpkvIt5wHhvhJu_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1iOv5bLNb04oC0nFMhjWTph2kgNBCrJrF",
    "specs": {
      "weightGrams": 73,
      "printTimeHours": 5.8,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8125,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1ZMU3mEZ-0bL7O2Pn6DcwOyTa5nCWKumG",
    "number": 27,
    "folderName": "Christmas Tree 19",
    "title": "Bolinha de Natal Pingente Floco de Neve",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1-T5zL0B4jfUnU45oDPNlUNaiNv484Ilq=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1-T5zL0B4jfUnU45oDPNlUNaiNv484Ilq=w800"
    ],
    "files": [
      {
        "id": "1bW61sLE5hjdQ8SleqIszNQD03Ddm7IpU",
        "name": "Snowflake bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bW61sLE5hjdQ8SleqIszNQD03Ddm7IpU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ZMU3mEZ-0bL7O2Pn6DcwOyTa5nCWKumG",
    "specs": {
      "weightGrams": 110,
      "printTimeHours": 7.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8402,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1sRSl9oDYXRpWPCQ9op6PDQo9h-QWt_16",
    "number": 28,
    "folderName": "Christmas Tree 20",
    "title": "Mini Enfeite de Árvore Pingente de Natal",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1ih6bk7Kt7wlnpFjNB8FYxD7neq1NP-ut=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1ih6bk7Kt7wlnpFjNB8FYxD7neq1NP-ut=w800"
    ],
    "files": [
      {
        "id": "1ydMMQDm6f_rehSUKqBn3S17gYlreGiQU",
        "name": "Mini Christmas tree bauble ornament.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ydMMQDm6f_rehSUKqBn3S17gYlreGiQU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1sRSl9oDYXRpWPCQ9op6PDQo9h-QWt_16",
    "specs": {
      "weightGrams": 147,
      "printTimeHours": 8.8,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8679,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1VAFNQGIG8X2uz-TOkhFYCeSi_gpEZH22",
    "number": 29,
    "folderName": "Christmas Tree 21",
    "title": "Bolinha de Natal Pingente Darth Vader (Star Wars)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1I25t3wtL_wSzlKFjTUdAinoRshXfyVq6=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1I25t3wtL_wSzlKFjTUdAinoRshXfyVq6=w800"
    ],
    "files": [
      {
        "id": "1o5cKLvU6wl8FD3eBznE1bo8hzhbOqawv",
        "name": "Darth Vader Bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1o5cKLvU6wl8FD3eBznE1bo8hzhbOqawv"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1VAFNQGIG8X2uz-TOkhFYCeSi_gpEZH22",
    "specs": {
      "weightGrams": 184,
      "printTimeHours": 15.3,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8956,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1OEs5D3zkJx4LPJXtW0jB7bjZcwPh78AM",
    "number": 30,
    "folderName": "Christmas Tree 22",
    "title": "Bolinha de Natal Pingente Anjo da Paz",
    "category": "presepios",
    "categoryLabel": "Presépios & Sagrado",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1mAAYPd2iEemdU2oE4egkvgNgS6tMy2Ud=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1mAAYPd2iEemdU2oE4egkvgNgS6tMy2Ud=w800"
    ],
    "files": [
      {
        "id": "1psFpRDL8OOLaL9szhfvNPEqSC4H98p2A",
        "name": "Angel bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1psFpRDL8OOLaL9szhfvNPEqSC4H98p2A"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OEs5D3zkJx4LPJXtW0jB7bjZcwPh78AM",
    "specs": {
      "weightGrams": 41,
      "printTimeHours": 3,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9233,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1Dqy_DwPoe6v3ahmQYS8hFLeCb5n3NevY",
    "number": 31,
    "folderName": "Christmas Tree 23",
    "title": "Torre de Caixas de Presente em Formato de Árvore",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Decoração",
    "imageUrl": "https://lh3.googleusercontent.com/d/1akPGEFoVKL5FTZo2djvetfFsN11M1SBN=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1akPGEFoVKL5FTZo2djvetfFsN11M1SBN=w800"
    ],
    "files": [
      {
        "id": "16XjDzjRVuHGq8E7BCamPjMXmVlJjs5gD",
        "name": "Christmas Tree Boxes.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16XjDzjRVuHGq8E7BCamPjMXmVlJjs5gD"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Dqy_DwPoe6v3ahmQYS8hFLeCb5n3NevY",
    "specs": {
      "weightGrams": 78,
      "printTimeHours": 4.9,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9510,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1yPw-_tMaWu9z8x8sEREHU9W5uRsP84g0",
    "number": 32,
    "folderName": "Christmas Tree 24",
    "title": "Bolinha de Natal Pingente Gatinho Natalino",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/13UCeWcxMXqItRaMGWnzPvPClMG-VaRGh=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/13UCeWcxMXqItRaMGWnzPvPClMG-VaRGh=w800"
    ],
    "files": [
      {
        "id": "1viqSSKbMNwpN6jMAuLsQ0x6Vk2bXjK-F",
        "name": "Cat Bauble.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1viqSSKbMNwpN6jMAuLsQ0x6Vk2bXjK-F"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yPw-_tMaWu9z8x8sEREHU9W5uRsP84g0",
    "specs": {
      "weightGrams": 115,
      "printTimeHours": 6.1,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9787,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1jrYK5IxqjsC5AxPx_wfXwayxmxOxFEKv",
    "number": 33,
    "folderName": "Christmas Tree 25",
    "title": "Pinheiro de Natal em Camadas Suaves para Decoração",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1d3zqWdmRQTjGZjlsV5vey8IAOFUPYvcH=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1d3zqWdmRQTjGZjlsV5vey8IAOFUPYvcH=w800"
    ],
    "files": [
      {
        "id": "1GHtbK7A90lRGefD8LSUvBh-LWVXpAy5E",
        "name": "4_6001083238326470875.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GHtbK7A90lRGefD8LSUvBh-LWVXpAy5E"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jrYK5IxqjsC5AxPx_wfXwayxmxOxFEKv",
    "specs": {
      "weightGrams": 152,
      "printTimeHours": 11.7,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 10064,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "10Cb_w0TAZublHeMTIx20q5aNPgTN9UMm",
    "number": 34,
    "folderName": "Christmas Tree 26",
    "title": "Árvore de Natal e Ano Novo Festiva Esculpida",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1ujwlHl8-4ylFWC4wosUPm4YQSS9BCcQ3=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1ujwlHl8-4ylFWC4wosUPm4YQSS9BCcQ3=w800"
    ],
    "files": [
      {
        "id": "1PR2CptL0M3pXOvKWxp9KagbhnLlDPylX",
        "name": "newyear02.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PR2CptL0M3pXOvKWxp9KagbhnLlDPylX"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/10Cb_w0TAZublHeMTIx20q5aNPgTN9UMm",
    "specs": {
      "weightGrams": 189,
      "printTimeHours": 12.6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 10341,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1gunZraeoQiWywj_NgEgEEx1bnpob8iHS",
    "number": 35,
    "folderName": "Christmas Tree Cats",
    "title": "Árvore de Natal com Gatinhos Brincalhões",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1YcnQRT1qOey8VUBg6lAuHMPShJ2-YBIl=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1YcnQRT1qOey8VUBg6lAuHMPShJ2-YBIl=w800"
    ],
    "files": [
      {
        "id": "1COcYafFBcziaDO_owOfxuyMkDYe7QZva",
        "name": "Arbol-Gatitos-base.3mf",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1COcYafFBcziaDO_owOfxuyMkDYe7QZva"
      },
      {
        "id": "1Q25ES1DyZgmPy_OY5eK2WVb-8yjXLO7Z",
        "name": "Arbol-Gatitos.3mf",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q25ES1DyZgmPy_OY5eK2WVb-8yjXLO7Z"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gunZraeoQiWywj_NgEgEEx1bnpob8iHS",
    "specs": {
      "weightGrams": 46,
      "printTimeHours": 2.6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 10618,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1IHkRdxRNMC76k_H4gWCnP3qwm4cqC1jc",
    "number": 36,
    "folderName": "Christmas Tree Collapsible",
    "title": "Árvore de Natal Retrátil Articulada (Print-in-Place)",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Articulado",
    "imageUrl": "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [
      {
        "id": "1igSsNq3SjElFOwKZAsOLI51xptJOseR3",
        "name": "collapsible-christmas-tree-v20-model_files.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1igSsNq3SjElFOwKZAsOLI51xptJOseR3"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1IHkRdxRNMC76k_H4gWCnP3qwm4cqC1jc",
    "specs": {
      "weightGrams": 83,
      "printTimeHours": 6.6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 10895,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1v_p2z9IZ_dhGlSW0T_7FVQkXRut95XHq",
    "number": 37,
    "folderName": "Christmas Tree Kit Card",
    "title": "Kit Card Árvore de Natal Montável",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Kit Card",
    "imageUrl": "https://lh3.googleusercontent.com/d/1PK90gKAGwCgZLHaseo2m44jXRyWHGRJR=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1PK90gKAGwCgZLHaseo2m44jXRyWHGRJR=w800",
      "https://lh3.googleusercontent.com/d/1JTo7dYaoLxZDYKLxDQcANL-_jIs2Lqu1=w800",
      "https://lh3.googleusercontent.com/d/12OaCZPsescQDqHDekyPuPapj9j_yFY7v=w800"
    ],
    "files": [
      {
        "id": "1vm2SX6ZVRlhwNE1fGb9iLiKgD63JlYT_",
        "name": "Christmas_Tree_Card_multicolor.3mf",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vm2SX6ZVRlhwNE1fGb9iLiKgD63JlYT_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1v_p2z9IZ_dhGlSW0T_7FVQkXRut95XHq",
    "specs": {
      "weightGrams": 120,
      "printTimeHours": 8.4,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 11172,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1HGEyAF77Ex1q3FJdVeeNBCJ8H_U_pIH2",
    "number": 38,
    "folderName": "Christmas Tree Lamp",
    "title": "Luminária Árvore de Natal com Base para LED",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Luminária",
    "imageUrl": "https://lh3.googleusercontent.com/d/1r0R1Ftwpsz4uSuoAmo0toPFAV5jyRzmZ=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1r0R1Ftwpsz4uSuoAmo0toPFAV5jyRzmZ=w800"
    ],
    "files": [
      {
        "id": "1_dwP0FSqdsRxX9efNJv5eUyKH43nIOJs",
        "name": "Christmas_Tree_now_with_lamp_base.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_dwP0FSqdsRxX9efNJv5eUyKH43nIOJs"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HGEyAF77Ex1q3FJdVeeNBCJ8H_U_pIH2",
    "specs": {
      "weightGrams": 157,
      "printTimeHours": 9.4,
      "filament": "PETG / PLA Translúcido Cristal",
      "infill": "10% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 11449,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1wWXWnPb5lBslAvcr-bGl5dwkJ2JrErqK",
    "number": 39,
    "folderName": "Christmas Tree Lamp 2",
    "title": "Luminária LED Pinheiro Natalino Falcosign",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Luminária",
    "imageUrl": "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [
      {
        "id": "1y0zcDtk4N1T3A8a0eoltDkAMJjtdW-HL",
        "name": "christmas-tree-v3-led-lamp-falcosign-model_files.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1y0zcDtk4N1T3A8a0eoltDkAMJjtdW-HL"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1wWXWnPb5lBslAvcr-bGl5dwkJ2JrErqK",
    "specs": {
      "weightGrams": 194,
      "printTimeHours": 16.2,
      "filament": "PETG / PLA Translúcido Cristal",
      "infill": "10% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 11726,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1fv0t_zpu452bvb89IHfJh0dtmsui8toc",
    "number": 40,
    "folderName": "Christmas Tree Lamp 3",
    "title": "Luminária Pinheiro de Natal Translúcida",
    "category": "luminarias",
    "categoryLabel": "Luminárias & Decoração",
    "tagType": "Luminária",
    "imageUrl": "https://lh3.googleusercontent.com/d/1jKhu7rb9N9NMRpobOU1pV_aBOATxxmU9=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1jKhu7rb9N9NMRpobOU1pV_aBOATxxmU9=w800"
    ],
    "files": [
      {
        "id": "1dcb8KlI-TLUDGU7RWJM_R_IeXwJ2nXFS",
        "name": "sapin lampe couder.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dcb8KlI-TLUDGU7RWJM_R_IeXwJ2nXFS"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1fv0t_zpu452bvb89IHfJh0dtmsui8toc",
    "specs": {
      "weightGrams": 51,
      "printTimeHours": 3.7,
      "filament": "PETG / PLA Translúcido Cristal",
      "infill": "10% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 12003,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1lZvREknxaK97kVIt2-eOmBCNazuFh3_Y",
    "number": 41,
    "folderName": "Christmas Tree Puzzle Model",
    "title": "Quebra-Cabeça 3D Árvore de Natal Interativo",
    "category": "arvores",
    "categoryLabel": "Árvores & Pinheiros",
    "tagType": "Puzzle",
    "imageUrl": "https://lh3.googleusercontent.com/d/1py00agYartE5spZmqpZ16xxkI89Uf-p8=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1py00agYartE5spZmqpZ16xxkI89Uf-p8=w800"
    ],
    "files": [
      {
        "id": "1VeyubNPv-jesrBY0OLH-VE5GAYToF83W",
        "name": "christmas-tree-puzzle-model_files.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VeyubNPv-jesrBY0OLH-VE5GAYToF83W"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1lZvREknxaK97kVIt2-eOmBCNazuFh3_Y",
    "specs": {
      "weightGrams": 88,
      "printTimeHours": 5.6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 12280,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1oyUEJROio5KOHQ1_dTcFsDckamGYU1pP",
    "number": 42,
    "folderName": "Cookie Cutter",
    "title": "Cortador de Biscoito Folha de Visgo (Mistletoe)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://lh3.googleusercontent.com/d/1T01h5Op4dXgwqkFlxkLbirPtQhm9AC9i=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1T01h5Op4dXgwqkFlxkLbirPtQhm9AC9i=w800"
    ],
    "files": [
      {
        "id": "1ve-8NyZPgbGB5nNC8TR0VczXSK-6W6DD",
        "name": "Mistletoe__Cookie_Cutter.STL",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ve-8NyZPgbGB5nNC8TR0VczXSK-6W6DD"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1oyUEJROio5KOHQ1_dTcFsDckamGYU1pP",
    "specs": {
      "weightGrams": 125,
      "printTimeHours": 6.7,
      "filament": "PLA / PETG Food Safe (Cortadores)",
      "infill": "100% Sólido",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 12557,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1jRr9xxAumP-v5sCv0EU7vKAyohTJst0j",
    "number": 43,
    "folderName": "Cookie Cutter 2",
    "title": "Kit Cortadores de Biscoito Três Reis Magos (Reyes Magos)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://lh3.googleusercontent.com/d/1c0HBuznDOVnZ2WbSy6iGWjeeWfvGC4yu=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1c0HBuznDOVnZ2WbSy6iGWjeeWfvGC4yu=w800"
    ],
    "files": [
      {
        "id": "1YLFYxbcpxKWShFEAKEDO1vyBIyUbVV2t",
        "name": "REYES.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YLFYxbcpxKWShFEAKEDO1vyBIyUbVV2t"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jRr9xxAumP-v5sCv0EU7vKAyohTJst0j",
    "specs": {
      "weightGrams": 162,
      "printTimeHours": 12.4,
      "filament": "PLA / PETG Food Safe (Cortadores)",
      "infill": "100% Sólido",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 12834,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1MQLoIn1CfDFabhP5Q2_09Pl7cthNogJC",
    "number": 44,
    "folderName": "Cookie Cutter Set",
    "title": "Kit Cortadores de Biscoitos Natalinos Sortidos",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://lh3.googleusercontent.com/d/1QhgH-WOME0IzLJVV8vl9NZs9yMwhp-Qm=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1QhgH-WOME0IzLJVV8vl9NZs9yMwhp-Qm=w800"
    ],
    "files": [
      {
        "id": "1NGYiQBAkLdr91TWhjlis3FX77jEZnSgf",
        "name": "Cookie Cutter Set.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NGYiQBAkLdr91TWhjlis3FX77jEZnSgf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1MQLoIn1CfDFabhP5Q2_09Pl7cthNogJC",
    "specs": {
      "weightGrams": 199,
      "printTimeHours": 13.3,
      "filament": "PLA / PETG Food Safe (Cortadores)",
      "infill": "100% Sólido",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 13111,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1AFihqwN8c06I9Sgr3F2UY1GgQKLuN_xu",
    "number": 45,
    "folderName": "Cookie Cutter Set 2",
    "title": "Kit Cortadores Natalinos 6 Formas (Anjo, Estrela, Árvore e Bola)",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Cortador",
    "imageUrl": "https://lh3.googleusercontent.com/d/10rcdqW07nuSM4WE-SWS2UVFqNKlQgjpR=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/10rcdqW07nuSM4WE-SWS2UVFqNKlQgjpR=w800"
    ],
    "files": [
      {
        "id": "10gbGSQUp77t9Dqf-dl14CcmoLccAX1cj",
        "name": "angel navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10gbGSQUp77t9Dqf-dl14CcmoLccAX1cj"
      },
      {
        "id": "1oYyZgAzzz_kRr98C6OGHgxMPOYfvPlHQ",
        "name": "angelita navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oYyZgAzzz_kRr98C6OGHgxMPOYfvPlHQ"
      },
      {
        "id": "1KFSa27ZlWeeOo2UXnPDtwCyZ7K99dvLf",
        "name": "arbol navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KFSa27ZlWeeOo2UXnPDtwCyZ7K99dvLf"
      },
      {
        "id": "1OT8L9DzzB9SMvX5I3H2KF_JOz9B-4WJM",
        "name": "bola navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OT8L9DzzB9SMvX5I3H2KF_JOz9B-4WJM"
      },
      {
        "id": "1ivtvnAYYwGSDKyvNHfQtlbCyvI-Redfx",
        "name": "corazon navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ivtvnAYYwGSDKyvNHfQtlbCyvI-Redfx"
      },
      {
        "id": "1_DBJ2tiDjZncg_kjFep47ZaayMTm_vrv",
        "name": "estrella navidad stl.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_DBJ2tiDjZncg_kjFep47ZaayMTm_vrv"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AFihqwN8c06I9Sgr3F2UY1GgQKLuN_xu",
    "specs": {
      "weightGrams": 56,
      "printTimeHours": 3.2,
      "filament": "PLA / PETG Food Safe (Cortadores)",
      "infill": "100% Sólido",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 13388,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1o8e239PF1AGA_gqsg4G8poIMsoASTNS7",
    "number": 46,
    "folderName": "Deadeye",
    "title": "Gnomo Natalino Pirata Deadeye",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1H0VNADmdyC_q5z-SiJCtjcnDxqqn4XbT=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1H0VNADmdyC_q5z-SiJCtjcnDxqqn4XbT=w800"
    ],
    "files": [
      {
        "id": "1wTQNKMTeGDPH4bahZ4IIHxpdnHfRcnuJ",
        "name": "christmas-deadeye.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wTQNKMTeGDPH4bahZ4IIHxpdnHfRcnuJ"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1o8e239PF1AGA_gqsg4G8poIMsoASTNS7",
    "specs": {
      "weightGrams": 93,
      "printTimeHours": 7.4,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 13665,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1aEDrPdTs2A3k7hezt5sA4afLh5ocs_jI",
    "number": 47,
    "folderName": "Deer",
    "title": "Rena Decorativa Geométrica Low-Poly",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Low-Poly",
    "imageUrl": "https://lh3.googleusercontent.com/d/19cSJwUn1fWl1Lo2RS1lR8y2ZbhMd3p8e=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/19cSJwUn1fWl1Lo2RS1lR8y2ZbhMd3p8e=w800"
    ],
    "files": [
      {
        "id": "1nGahAJwSRW7FcGCGSH6GH3PRpqVVTsdu",
        "name": "deer.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nGahAJwSRW7FcGCGSH6GH3PRpqVVTsdu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1aEDrPdTs2A3k7hezt5sA4afLh5ocs_jI",
    "specs": {
      "weightGrams": 130,
      "printTimeHours": 9.1,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 13942,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1l7pyjlDpuIeroaUb3Ltmxoun6FAQ7vZk",
    "number": 48,
    "folderName": "Deer 2",
    "title": "Rena Voronoi Elegante Vazada Decorativa",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Voronoi",
    "imageUrl": "https://lh3.googleusercontent.com/d/1-n9GxVnZf9mU-7UIADLMcZ8J_4hGrjvz=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1-n9GxVnZf9mU-7UIADLMcZ8J_4hGrjvz=w800"
    ],
    "files": [
      {
        "id": "1ZNAzMovASMCoiKD5IICfwxRLZSvAwGbF",
        "name": "deer-voronoi20201222-9902-dqp3am.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZNAzMovASMCoiKD5IICfwxRLZSvAwGbF"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1l7pyjlDpuIeroaUb3Ltmxoun6FAQ7vZk",
    "specs": {
      "weightGrams": 167,
      "printTimeHours": 10,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 14219,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "11FK023G7W5H6HkxQfpXaQyvJpbv-T-Cl",
    "number": 49,
    "folderName": "Deer 3",
    "title": "Rena Clássica Realista com Galhada Dupla",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1VaQUM1dM3uFmUxR-aLkULUYm2bDFdTX1=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1VaQUM1dM3uFmUxR-aLkULUYm2bDFdTX1=w800"
    ],
    "files": [
      {
        "id": "1mz8uUDlQ3EbIN-weU8BwB4Mi8hZwXh7o",
        "name": "Christmas Deer.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mz8uUDlQ3EbIN-weU8BwB4Mi8hZwXh7o"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11FK023G7W5H6HkxQfpXaQyvJpbv-T-Cl",
    "specs": {
      "weightGrams": 204,
      "printTimeHours": 17,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 14496,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1OeNMVwyKtnApSTWb6c09Ta00px7SoI0w",
    "number": 50,
    "folderName": "Deer 4",
    "title": "Rena Articulada Dobrável Print-in-Place (Fab365)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Yi81qgdlm64u99kz6QMpKFtZpAWM7VwH=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1Yi81qgdlm64u99kz6QMpKFtZpAWM7VwH=w800"
    ],
    "files": [
      {
        "id": "1KB1YHMS5WvAy4ZdTDW-LIUkN5y8xthMw",
        "name": "Fab365 - Foldable deer_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KB1YHMS5WvAy4ZdTDW-LIUkN5y8xthMw"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OeNMVwyKtnApSTWb6c09Ta00px7SoI0w",
    "specs": {
      "weightGrams": 61,
      "printTimeHours": 4.5,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 14773,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1JwjOk3gW-W5Zic02lPAWczv-Ozz15Fgm",
    "number": 51,
    "folderName": "Santa Claus Hat 2",
    "title": "Gorro de Papai Noel Tampa para Garrafa de Vinho",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Utilidade",
    "imageUrl": "https://lh3.googleusercontent.com/d/1tRl7R0o2NQooQO9cEr4dY199DOFBePh6=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1tRl7R0o2NQooQO9cEr4dY199DOFBePh6=w800"
    ],
    "files": [
      {
        "id": "14MIlc693q-gdAc1hjQ_V9mxbOh6b9apq",
        "name": "santa_hat_christmas_decoration_that_fits_onto_the_top_of_a_bottl.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14MIlc693q-gdAc1hjQ_V9mxbOh6b9apq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1JwjOk3gW-W5Zic02lPAWczv-Ozz15Fgm",
    "specs": {
      "weightGrams": 98,
      "printTimeHours": 6.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 15050,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1KzuubRFSpHmb5mL_cwJuc7O5Nx1erTgK",
    "number": 52,
    "folderName": "Santa Claus Key Holder",
    "title": "Porta-Chaves de Parede Papai Noel",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Porta-Chaves",
    "imageUrl": "https://lh3.googleusercontent.com/d/1uNUMVPg9KpPlYjIu_QrjohvJ3Vf7Ryad=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1uNUMVPg9KpPlYjIu_QrjohvJ3Vf7Ryad=w800"
    ],
    "files": [
      {
        "id": "14OozHCp140nOk9qBEQO8A8JTL3kuEERN",
        "name": "SANTA_CLAUS-20230723T171713Z-001.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14OozHCp140nOk9qBEQO8A8JTL3kuEERN"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1KzuubRFSpHmb5mL_cwJuc7O5Nx1erTgK",
    "specs": {
      "weightGrams": 135,
      "printTimeHours": 7.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 15327,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1_NcqJCCVeC47JNrNcAN-qQoZNQyt1k-p",
    "number": 53,
    "folderName": "Santa Claus Robot",
    "title": "Papai Noel Robô do Futurama (Robot Santa)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [
      {
        "id": "1GrfV0vXLS0TvrNIRpV6u82G4Ds6V9Wbx",
        "name": "Futurama - Robot Santa.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GrfV0vXLS0TvrNIRpV6u82G4Ds6V9Wbx"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_NcqJCCVeC47JNrNcAN-qQoZNQyt1k-p",
    "specs": {
      "weightGrams": 172,
      "printTimeHours": 13.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 15604,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1VTgoq4OrRBge39J_FmuiHfvc5pkAQWs9",
    "number": 54,
    "folderName": "Santa Claus Key Holder 2",
    "title": "Porta-Chaves Papai Noel com Ganchos Duplos",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Porta-Chaves",
    "imageUrl": "https://lh3.googleusercontent.com/d/1gp_MD_hwebcfpQs_XgWJSSRoDt87MrpJ=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1gp_MD_hwebcfpQs_XgWJSSRoDt87MrpJ=w800"
    ],
    "files": [
      {
        "id": "1nrOnr5nGKGOzi_cyd1uCJlZ4ae16JO_g",
        "name": "SATAN CLAUS-20230723T171718Z-001.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nrOnr5nGKGOzi_cyd1uCJlZ4ae16JO_g"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1VTgoq4OrRBge39J_FmuiHfvc5pkAQWs9",
    "specs": {
      "weightGrams": 209,
      "printTimeHours": 13.9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 15881,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1liRNjdnUhwWD3iqErI4nsdgJNxPHqrAM",
    "number": 55,
    "folderName": "Santa Claus Gengar",
    "title": "Gengar Pokémon com Gorro de Natal (Multimaterial)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1ja_MzUeq08rQgbI8YGMJC--XMfUW5wIV=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1ja_MzUeq08rQgbI8YGMJC--XMfUW5wIV=w800"
    ],
    "files": [
      {
        "id": "1T1BTWrS4DXkeJARvGSIIsMCX8MbwNSk8",
        "name": "santa_Gengar_multimaterial.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T1BTWrS4DXkeJARvGSIIsMCX8MbwNSk8"
      },
      {
        "id": "1SiC3hIEhYtIQ636TfcpqQ4TIbIYDKMcr",
        "name": "santa_gengar_solid.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SiC3hIEhYtIQ636TfcpqQ4TIbIYDKMcr"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1liRNjdnUhwWD3iqErI4nsdgJNxPHqrAM",
    "specs": {
      "weightGrams": 66,
      "printTimeHours": 3.7,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 16158,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1Lc3NjKZ9bnTnvByHjWvfsOR-Z-oStAf-",
    "number": 56,
    "folderName": "Santa Claus Hat",
    "title": "Gorro de Papai Noel Decorativo Tradicional",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Decoração",
    "imageUrl": "https://lh3.googleusercontent.com/d/1-PXLUDCqRobzRT2EDt0HHiyBZOndKZBH=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1-PXLUDCqRobzRT2EDt0HHiyBZOndKZBH=w800",
      "https://lh3.googleusercontent.com/d/1iz7ZAO-ia3Rn-pO4BiXgGNJNB2E6E_am=w800"
    ],
    "files": [
      {
        "id": "16-z5yrnpO52UavHdE2g3Ws-tiT0MDkcV",
        "name": "CreativeTools.se_-_ZPrinter-model_-_Santas_hat.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16-z5yrnpO52UavHdE2g3Ws-tiT0MDkcV"
      },
      {
        "id": "1Nq98_4UR43DyjPDJmiFRViE9PEbidVG7",
        "name": "Mini Santa Hat (with brim).zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nq98_4UR43DyjPDJmiFRViE9PEbidVG7"
      },
      {
        "id": "1Q8LxaJZxXfTgZR4iPUAfLAXXGab5Xd3F",
        "name": "santa hat.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q8LxaJZxXfTgZR4iPUAfLAXXGab5Xd3F"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Lc3NjKZ9bnTnvByHjWvfsOR-Z-oStAf-",
    "specs": {
      "weightGrams": 103,
      "printTimeHours": 8.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 16435,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "12XzC3A9ja3hcUokFDcv1XAGkMpj2qjrC",
    "number": 57,
    "folderName": "Santa Claus Clock",
    "title": "Relógio de Parede / Mesa Papai Noel",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Relógio",
    "imageUrl": "https://lh3.googleusercontent.com/d/1U47VSPnOLY63sWCzEoCCbqocgbrnwHAS=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1U47VSPnOLY63sWCzEoCCbqocgbrnwHAS=w800"
    ],
    "files": [
      {
        "id": "1O0ftjz-mbMFq_fM_UL1pTXdnqlZMaWA1",
        "name": "Santa Clock.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1O0ftjz-mbMFq_fM_UL1pTXdnqlZMaWA1"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12XzC3A9ja3hcUokFDcv1XAGkMpj2qjrC",
    "specs": {
      "weightGrams": 140,
      "printTimeHours": 9.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 16712,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1c0BjDiehKCS8cj3KlYWbZ4gTHyibSX5A",
    "number": 58,
    "folderName": "Santa Claus Bust 4",
    "title": "Busto Papai Noel Crônicas de Natal (Kurt Russell)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Busto",
    "imageUrl": "https://lh3.googleusercontent.com/d/1aPTLIzTeOiWaYJHeSAVJgNpx0hbDvwuw=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1aPTLIzTeOiWaYJHeSAVJgNpx0hbDvwuw=w800"
    ],
    "files": [
      {
        "id": "1CIofDDuM9sEikRE7tRENiiZcWJzQ84k7",
        "name": "Christmas Chronicles - Santa Bust.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CIofDDuM9sEikRE7tRENiiZcWJzQ84k7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1c0BjDiehKCS8cj3KlYWbZ4gTHyibSX5A",
    "specs": {
      "weightGrams": 177,
      "printTimeHours": 10.6,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.12mm Alta Resolução",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 16989,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1ilTobWdoTee1P93NoSI7V-E5lwzUAg48",
    "number": 59,
    "folderName": "Santa Claus Bust 2",
    "title": "Busto Papai Noel & Rudolph Zumbi (GoYo Works)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Busto",
    "imageUrl": "https://lh3.googleusercontent.com/d/1k4h_b9Kfx-pmRkt6lolId6X07BHuT9Kz=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1k4h_b9Kfx-pmRkt6lolId6X07BHuT9Kz=w800"
    ],
    "files": [
      {
        "id": "1ovMCgwsw7ucP7Xyje6q4YHUsyMmUzg2C",
        "name": "GoYo_works_Undead_Collection_Santa_and_Rudolph_ tridrob.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ovMCgwsw7ucP7Xyje6q4YHUsyMmUzg2C"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ilTobWdoTee1P93NoSI7V-E5lwzUAg48",
    "specs": {
      "weightGrams": 214,
      "printTimeHours": 17.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.12mm Alta Resolução",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 17266,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1r94swhLLojRLCqWMjYZbdIjouQn9jnCB",
    "number": 60,
    "folderName": "Santa Claus Bust",
    "title": "Busto Papai Noel Realista com Barba Longa",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Busto",
    "imageUrl": "https://lh3.googleusercontent.com/d/1CjFeaNArDACPz3cG6RteQ4KZ4Xfcph5U=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1CjFeaNArDACPz3cG6RteQ4KZ4Xfcph5U=w800"
    ],
    "files": [
      {
        "id": "17v4Yw73vPHpJVgflUVfk3JGwLqG1b1nH",
        "name": "Santa claus.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17v4Yw73vPHpJVgflUVfk3JGwLqG1b1nH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1r94swhLLojRLCqWMjYZbdIjouQn9jnCB",
    "specs": {
      "weightGrams": 71,
      "printTimeHours": 5.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.12mm Alta Resolução",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 17543,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "14B1qyBfzbGqf0bPFewEAbaJ77Utnh0dP",
    "number": 61,
    "folderName": "Santa claus 21",
    "title": "Papai Noel Lendo a Lista de Presentes de Natal",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1NjhRiXpbuD0ewxZiO8x2bzGtIqVPOVVA=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1NjhRiXpbuD0ewxZiO8x2bzGtIqVPOVVA=w800"
    ],
    "files": [
      {
        "id": "11p4nP1MBJkUQdHJnExmzabCYR8ZdVTJl",
        "name": "71Santa Claus reading list.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11p4nP1MBJkUQdHJnExmzabCYR8ZdVTJl"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14B1qyBfzbGqf0bPFewEAbaJ77Utnh0dP",
    "specs": {
      "weightGrams": 108,
      "printTimeHours": 6.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 17820,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1wlrIaKqqwgPwrM89ZaFaTzEaacWR_KBt",
    "number": 62,
    "folderName": "Santa Claus Among Us",
    "title": "Tripulante Among Us com Gorro de Natal",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1g1KOd5ezv0mPdT6nOPLO5wq4ooqoVNJ_=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1g1KOd5ezv0mPdT6nOPLO5wq4ooqoVNJ_=w800"
    ],
    "files": [
      {
        "id": "1DzMIgzUXBrYJvMswsKd4hF6XGKbgeN2i",
        "name": "santa among us.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DzMIgzUXBrYJvMswsKd4hF6XGKbgeN2i"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1wlrIaKqqwgPwrM89ZaFaTzEaacWR_KBt",
    "specs": {
      "weightGrams": 145,
      "printTimeHours": 7.7,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 18097,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "15B099Bdt14GRe177l15XgOZuhE_d6KWa",
    "number": 63,
    "folderName": "Santa Claus 22",
    "title": "Diorama Papai Noel e Boneco de Neve Companheiros",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/1K426Nej1meF7FCdhqvDJXvwCWQ9XPhia=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1K426Nej1meF7FCdhqvDJXvwCWQ9XPhia=w800"
    ],
    "files": [
      {
        "id": "1VGzwpK56IY5yOx_dHCWvlBR7zLC6rwln",
        "name": "Santa and Snowman.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VGzwpK56IY5yOx_dHCWvlBR7zLC6rwln"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15B099Bdt14GRe177l15XgOZuhE_d6KWa",
    "specs": {
      "weightGrams": 182,
      "printTimeHours": 14,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 18374,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1qHr2jfXNo2oZFS33-Ce3yzwhgMKGVs_c",
    "number": 64,
    "folderName": "Santa Claus Bad",
    "title": "Papai Noel Bad Santa Rebelde e Cômico",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1M_g-yqqPCul8QsO5JHNwjFTAAtlh_Ffb=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1M_g-yqqPCul8QsO5JHNwjFTAAtlh_Ffb=w800"
    ],
    "files": [
      {
        "id": "1Y1Q1KX0PHLAZXfANo7sBCmSaqvVy-zJm",
        "name": "Bad Santa   3D Print_@stl_zone.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y1Q1KX0PHLAZXfANo7sBCmSaqvVy-zJm"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1qHr2jfXNo2oZFS33-Ce3yzwhgMKGVs_c",
    "specs": {
      "weightGrams": 39,
      "printTimeHours": 2.6,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 18651,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1U9bXOt7wGyV-oQBCY-2CyNHgi8plcNu3",
    "number": 65,
    "folderName": "Santa Claus 20",
    "title": "Papai Noel Clássico Sentado com Presente",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/127g-wKD5_lOz37El6ieCRJqkAg-YBqFv=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/127g-wKD5_lOz37El6ieCRJqkAg-YBqFv=w800"
    ],
    "files": [
      {
        "id": "1vkDmYSqXZReR5wVUKHh5-AuuhdvjkMJ7",
        "name": "70Santa 4.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vkDmYSqXZReR5wVUKHh5-AuuhdvjkMJ7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1U9bXOt7wGyV-oQBCY-2CyNHgi8plcNu3",
    "specs": {
      "weightGrams": 76,
      "printTimeHours": 4.3,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 18928,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1Jxxm9_56ed365gRrENeclm6duX_VVHC0",
    "number": 66,
    "folderName": "Santa Claus Bust 3",
    "title": "Busto Papai Noel Bad Santa Pré-Suportado",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Busto",
    "imageUrl": "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=800&q=80",
    "additionalImages": [],
    "files": [
      {
        "id": "13w6GavXON6S17jPK_L8WXhSHK6KX6rtU",
        "name": "Bad_Santa_Pre_Supported.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13w6GavXON6S17jPK_L8WXhSHK6KX6rtU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Jxxm9_56ed365gRrENeclm6duX_VVHC0",
    "specs": {
      "weightGrams": 113,
      "printTimeHours": 9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.12mm Alta Resolução",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 19205,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1xzqshQLRFHpLuSp3hoU_UkC3ip7zYlut",
    "number": 67,
    "folderName": "Santa Claus 19",
    "title": "Trenó do Papai Noel Puxado por Rena Decorativo",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Qu22NGNCh3k4roOqKt2l91kP7WgN5dsH=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1Qu22NGNCh3k4roOqKt2l91kP7WgN5dsH=w800"
    ],
    "files": [
      {
        "id": "1lC-DOM0neta85pforJckA3Q4LDrT6_FL",
        "name": "15130_Santa Sleigh   Reindeer Christmas Decoration.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lC-DOM0neta85pforJckA3Q4LDrT6_FL"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1xzqshQLRFHpLuSp3hoU_UkC3ip7zYlut",
    "specs": {
      "weightGrams": 150,
      "printTimeHours": 10.5,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 19482,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1lXf9QBNScAF_OjH6INs1Lyzm_3HwWbyq",
    "number": 68,
    "folderName": "Santa Claus 18",
    "title": "Papai Noel Clássico com Sacola de Brinquedos",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1kveZySuylMTV4Zm6SxUndq9qxnf1JrHi=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1kveZySuylMTV4Zm6SxUndq9qxnf1JrHi=w800"
    ],
    "files": [
      {
        "id": "12cWegl-UE2JoatOTBTKFCH2pqEg6t34r",
        "name": "Santa Claus - Repaired.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12cWegl-UE2JoatOTBTKFCH2pqEg6t34r"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1lXf9QBNScAF_OjH6INs1Lyzm_3HwWbyq",
    "specs": {
      "weightGrams": 187,
      "printTimeHours": 11.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1259,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "11fakBqHlQK0aXdja8P3T2YehFHIlx5iL",
    "number": 69,
    "folderName": "Santa Claus 16",
    "title": "Papai Noel e Boneco de Neve Abraçados",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1icDK_4CY-MgEZ8lx6uGkVScok1VLPzH1=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1icDK_4CY-MgEZ8lx6uGkVScok1VLPzH1=w800"
    ],
    "files": [
      {
        "id": "1DaMyDMO5iaGWCEF9J9K6yqSQBooeKeFN",
        "name": "Santa and Snowman.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DaMyDMO5iaGWCEF9J9K6yqSQBooeKeFN"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11fakBqHlQK0aXdja8P3T2YehFHIlx5iL",
    "specs": {
      "weightGrams": 44,
      "printTimeHours": 3.7,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1536,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "10OzuefJFnrik9m812o5zxUWQQLhTRdM9",
    "number": 70,
    "folderName": "Santa Claus 17",
    "title": "Super Trenó Voador do Papai Noel de Luxo (Gambody)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Colecionável",
    "imageUrl": "https://lh3.googleusercontent.com/d/19xlNZErP1my7uxLoH4c7sq2-gwnEEOt3=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/19xlNZErP1my7uxLoH4c7sq2-gwnEEOt3=w800"
    ],
    "files": [
      {
        "id": "1u4NfOK_ZW5O1SFUj2MqAwnVuoHurtMwq",
        "name": "Santa_New_Sleigh_-_Gambody.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u4NfOK_ZW5O1SFUj2MqAwnVuoHurtMwq"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/10OzuefJFnrik9m812o5zxUWQQLhTRdM9",
    "specs": {
      "weightGrams": 81,
      "printTimeHours": 5.9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 1813,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1x-0ixPW8CNMLBgVUehaIKeFUJwSfzqY2",
    "number": 71,
    "folderName": "Santa Claus 8",
    "title": "Papai Noel no Carrinho de Madeira (Santa on Cart)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/17FTu3ZJBq7uv4pf9mzkeIZwdnltOI-nb=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/17FTu3ZJBq7uv4pf9mzkeIZwdnltOI-nb=w800"
    ],
    "files": [
      {
        "id": "1jTULHwWqjEU_cMNrrhMHThDvzgPezcO_",
        "name": "Santa on Cart.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jTULHwWqjEU_cMNrrhMHThDvzgPezcO_"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1x-0ixPW8CNMLBgVUehaIKeFUJwSfzqY2",
    "specs": {
      "weightGrams": 118,
      "printTimeHours": 7.5,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2090,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1jetzGCkGDTEFXud4LrFJ41oJ5OYyeGds",
    "number": 72,
    "folderName": "Santa Claus 9",
    "title": "Papai Noel Tradicional Acenando com Saco de Presentes",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/15fOHSMWhfDTtZgS_hnAVUlJ9GIcpK8ZI=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/15fOHSMWhfDTtZgS_hnAVUlJ9GIcpK8ZI=w800"
    ],
    "files": [
      {
        "id": "1U1GQ1FTvuuqZvP2XYbIkDzFiMWByZnkK",
        "name": "Santa.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1U1GQ1FTvuuqZvP2XYbIkDzFiMWByZnkK"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jetzGCkGDTEFXud4LrFJ41oJ5OYyeGds",
    "specs": {
      "weightGrams": 155,
      "printTimeHours": 8.3,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2367,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1HLUEl-Bkgr46gtmpx3tUvyvLVql_g2bk",
    "number": 73,
    "folderName": "Santa Claus 14",
    "title": "Miniatura Esculpida Papai Noel Elegante",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Miniatura",
    "imageUrl": "https://lh3.googleusercontent.com/d/16q3Amq8lwQb3NpAK96wWFRcMgsuEVxNp=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/16q3Amq8lwQb3NpAK96wWFRcMgsuEVxNp=w800"
    ],
    "files": [
      {
        "id": "1gH1DjDOtaf9NspaL0sCFTOL4qkHJ0a_k",
        "name": "Santa Model.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gH1DjDOtaf9NspaL0sCFTOL4qkHJ0a_k"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HLUEl-Bkgr46gtmpx3tUvyvLVql_g2bk",
    "specs": {
      "weightGrams": 192,
      "printTimeHours": 14.7,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2644,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1QnJ-9sl-1_1zUsqDxojFEVw3xojOb2q9",
    "number": 74,
    "folderName": "Santa Claus 12",
    "title": "Trenó Mágico do Papai Noel Carregado de Presentes",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/16gEba4GKJHWVTLW-fAAQABAePUuYTew8=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/16gEba4GKJHWVTLW-fAAQABAePUuYTew8=w800"
    ],
    "files": [
      {
        "id": "1-gTNV9V6FSBcdb1r2XmtzeoGVcclAWqc",
        "name": "Santa New Sleigh.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-gTNV9V6FSBcdb1r2XmtzeoGVcclAWqc"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1QnJ-9sl-1_1zUsqDxojFEVw3xojOb2q9",
    "specs": {
      "weightGrams": 49,
      "printTimeHours": 3.3,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 2921,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1uIaqlakqITU8ikHB6U5cM926rnuHvMsu",
    "number": 75,
    "folderName": "Santa Claus 13",
    "title": "Cyber Santa - Papai Noel Cyberpunk (Papsikels)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1w5h5yJ8muVnNu7Ub5Yj9dAQnIaLrYRLh=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1w5h5yJ8muVnNu7Ub5Yj9dAQnIaLrYRLh=w800"
    ],
    "files": [
      {
        "id": "1vS2fnT1h0PqmyzUGPa_L5izmIDA1lRVC",
        "name": "@Sharehammer_Papsikels_2022_12_Holiday_Special_Models_Cyber_Sant.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vS2fnT1h0PqmyzUGPa_L5izmIDA1lRVC"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uIaqlakqITU8ikHB6U5cM926rnuHvMsu",
    "specs": {
      "weightGrams": 86,
      "printTimeHours": 4.9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3198,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1UN0oe89zuFgj3-MBl2w41tsEOkh0YlVW",
    "number": 76,
    "folderName": "Santa Claus 11",
    "title": "Papai Noel Colecionável Pose Clássica (By AiR)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/18seSrqQcmdXo8mVCqiyXcjMxm8j4Ixsr=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/18seSrqQcmdXo8mVCqiyXcjMxm8j4Ixsr=w800"
    ],
    "files": [
      {
        "id": "1g6loSHxrdTig4P2CvrQGR06ceois0fL7",
        "name": "Santa - By AiR.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1g6loSHxrdTig4P2CvrQGR06ceois0fL7"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UN0oe89zuFgj3-MBl2w41tsEOkh0YlVW",
    "specs": {
      "weightGrams": 123,
      "printTimeHours": 9.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3475,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1GHJPpib59lFNVcpyUwPNIlI3oGRiu5_O",
    "number": 77,
    "folderName": "Santa Claus 15",
    "title": "Papai Noel Estilo Entalhe Rústico em Madeira",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Sp-de7wJTtbVNZH0RvZH03z2P-8VXCG7=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1Sp-de7wJTtbVNZH0RvZH03z2P-8VXCG7=w800"
    ],
    "files": [
      {
        "id": "1ByD_7UvwI7TEJE0krLiRKlMHUiO9sGip",
        "name": "Santa Carving.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ByD_7UvwI7TEJE0krLiRKlMHUiO9sGip"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1GHJPpib59lFNVcpyUwPNIlI3oGRiu5_O",
    "specs": {
      "weightGrams": 160,
      "printTimeHours": 11.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 3752,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1dNqecwgjMyH1P81SNaXU1FBhuOLyH6d0",
    "number": 78,
    "folderName": "Santa Claus 10",
    "title": "Papai Noel Articulado Flexy com Trenó (Print-in-Place)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/11OU0rpQoRC74TeyU2N6_cJexcm9er6nE=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/11OU0rpQoRC74TeyU2N6_cJexcm9er6nE=w800"
    ],
    "files": [
      {
        "id": "1QlSZU4oui0pkJqqtCITbSN-qq7I2rueS",
        "name": "Flexy_Santa_and_Sleigh.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QlSZU4oui0pkJqqtCITbSN-qq7I2rueS"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dNqecwgjMyH1P81SNaXU1FBhuOLyH6d0",
    "specs": {
      "weightGrams": 197,
      "printTimeHours": 11.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4029,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "12UtOtzFHOZBZNJfBIgr_VI200ltr5IZz",
    "number": 79,
    "folderName": "Santa Claus 6",
    "title": "Papai Noel Gancho de Prateleira Hooked Santa (STLFlix)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Enfeite",
    "imageUrl": "https://lh3.googleusercontent.com/d/1vFRXhChTczB66dyDwsYY2g3BojjmzTKJ=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1vFRXhChTczB66dyDwsYY2g3BojjmzTKJ=w800"
    ],
    "files": [
      {
        "id": "1xjSa5akk0jHvS5BwpGoPynqwm6voGB5i",
        "name": "StlFlix- Hooked Santa @Print3DWorld.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xjSa5akk0jHvS5BwpGoPynqwm6voGB5i"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12UtOtzFHOZBZNJfBIgr_VI200ltr5IZz",
    "specs": {
      "weightGrams": 54,
      "printTimeHours": 4.5,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4306,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1l_tCedcbLClkuVtIzOHv_v2FesrLfsJF",
    "number": 80,
    "folderName": "Santa Claus 7",
    "title": "Papai Noel Guerreiro Estilizado (Santa Kan)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1XCNT0-vvfdkIiYJ0QLKyOhbBJjH-47iA=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1XCNT0-vvfdkIiYJ0QLKyOhbBJjH-47iA=w800"
    ],
    "files": [
      {
        "id": "1FW04-XVnzEDc12KAZmUjwqnQDaeC9kLu",
        "name": "Santa Kan.rar",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FW04-XVnzEDc12KAZmUjwqnQDaeC9kLu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1l_tCedcbLClkuVtIzOHv_v2FesrLfsJF",
    "specs": {
      "weightGrams": 91,
      "printTimeHours": 6.7,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4583,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1_TFG0x0jgxCWKtunwjk3cBfAltBHvJiD",
    "number": 81,
    "folderName": "Santa Claus 5",
    "title": "Diorama Papai Noel Anime Chibi Fofinho",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Chibi",
    "imageUrl": "https://lh3.googleusercontent.com/d/1cTIBX8CIpn9FZUPRl_rVwWhfePl91SeN=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1cTIBX8CIpn9FZUPRl_rVwWhfePl91SeN=w800"
    ],
    "files": [
      {
        "id": "1cLe2_cQ62GZn6fuV2jGOuDjbzhktli5E",
        "name": "Santa+Claus+Anime+Chibi+Diorama+-+Christmas.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cLe2_cQ62GZn6fuV2jGOuDjbzhktli5E"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_TFG0x0jgxCWKtunwjk3cBfAltBHvJiD",
    "specs": {
      "weightGrams": 128,
      "printTimeHours": 8.1,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 4860,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1NPjVGGqrr75h8BHcFJ2LnS3kmYOdLMb6",
    "number": 82,
    "folderName": "Santa Claus 4",
    "title": "Papai Noel Estátua Premium Colecionável (Malix3D)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Colecionável",
    "imageUrl": "https://lh3.googleusercontent.com/d/1R67X6A5UfAhBkZquv46GgPS1YIX_al0C=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1R67X6A5UfAhBkZquv46GgPS1YIX_al0C=w800"
    ],
    "files": [
      {
        "id": "1XSH5_46NRT7PpWkUhH6khD6PoqKg693T",
        "name": "Malix3D - SANTA CLAUS (SET)_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XSH5_46NRT7PpWkUhH6khD6PoqKg693T"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NPjVGGqrr75h8BHcFJ2LnS3kmYOdLMb6",
    "specs": {
      "weightGrams": 165,
      "printTimeHours": 8.8,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5137,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1sacCv0Mkb0tEgnP9IMzzRRMlLNOq0TXX",
    "number": 83,
    "folderName": "Santa Claus 2",
    "title": "Papai Noel Biscoito Gingerbread Articulado (Fab365)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/18N44rYXJOBMUABMW9uUzbiJDk7NjdIgE=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/18N44rYXJOBMUABMW9uUzbiJDk7NjdIgE=w800"
    ],
    "files": [
      {
        "id": "1yQemBKQDKyTxgdQlRzEfMGWTjjw-Kakd",
        "name": "Fab365_Movable Gingerbread Santa Claus @Print3DWorld.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yQemBKQDKyTxgdQlRzEfMGWTjjw-Kakd"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1sacCv0Mkb0tEgnP9IMzzRRMlLNOq0TXX",
    "specs": {
      "weightGrams": 202,
      "printTimeHours": 15.5,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5414,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "16REKvfB5fxEdlegbm6M-r5cZqfil18Yl",
    "number": 84,
    "folderName": "Santa Claus 3",
    "title": "Boneco de Gengibre Noel Dobrável Print-in-Place (Fab365)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/1daJyOHIf9BhL_H4Gb5rieGTmHB0bNZHm=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1daJyOHIf9BhL_H4Gb5rieGTmHB0bNZHm=w800"
    ],
    "files": [
      {
        "id": "1VAWgGRj7byVkRLBiEdwhSsMKgkWMtBaA",
        "name": "Fab365_Movable Gingerbread Santa Claus.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VAWgGRj7byVkRLBiEdwhSsMKgkWMtBaA"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/16REKvfB5fxEdlegbm6M-r5cZqfil18Yl",
    "specs": {
      "weightGrams": 59,
      "printTimeHours": 3.9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5691,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1DH-W9mJhwIHwnpjVjZTCQJ8vRvolmRpW",
    "number": 85,
    "folderName": "Santa Claus",
    "title": "Papai Noel Articulado Dobrável Print-in-Place (Fab365)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/1zJRdFfHkD3YXDcKey72E8Q70aFHzILel=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1zJRdFfHkD3YXDcKey72E8Q70aFHzILel=w800"
    ],
    "files": [
      {
        "id": "1p-p4_zmBVXdYHdjhWJGDzlxlv51LtklN",
        "name": "Fab365_Santa Claus @Print3DWorld.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p-p4_zmBVXdYHdjhWJGDzlxlv51LtklN"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1DH-W9mJhwIHwnpjVjZTCQJ8vRvolmRpW",
    "specs": {
      "weightGrams": 96,
      "printTimeHours": 5.4,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 5968,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1DbGOHrC-DARKwu1I-HB_sE1nQfFHqE9X",
    "number": 86,
    "folderName": "Santa Claus  Rock",
    "title": "Papai Noel Roqueiro com Guitarra Elétrica (Santa Rock)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Divertido",
    "imageUrl": "https://lh3.googleusercontent.com/d/17Lr6ZNUURB3xVvlTdJ1V9wGBKVmIfJkD=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/17Lr6ZNUURB3xVvlTdJ1V9wGBKVmIfJkD=w800"
    ],
    "files": [
      {
        "id": "1JJRZVn3skEgK5r7Qdm461lUf6vYqyzYt",
        "name": "Santa Rockero.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JJRZVn3skEgK5r7Qdm461lUf6vYqyzYt"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1DbGOHrC-DARKwu1I-HB_sE1nQfFHqE9X",
    "specs": {
      "weightGrams": 133,
      "printTimeHours": 10.6,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6245,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1TYVe6u09ZFTFD6r3BQckCoi6qAYmiybx",
    "number": 87,
    "folderName": "Robert Olans",
    "title": "Vasinho Robert Plant Natalino com Gorro de Papai Noel",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Vaso Decorativo",
    "imageUrl": "https://lh3.googleusercontent.com/d/1m0m55mA11de6shBLhupz2YBxDnsUjnJK=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1m0m55mA11de6shBLhupz2YBxDnsUjnJK=w800"
    ],
    "files": [
      {
        "id": "1GpU2eI-L-1bYZqn-kpmH4V_sP4vPC1OU",
        "name": "Christmas+Robert+plants.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GpU2eI-L-1bYZqn-kpmH4V_sP4vPC1OU"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1TYVe6u09ZFTFD6r3BQckCoi6qAYmiybx",
    "specs": {
      "weightGrams": 170,
      "printTimeHours": 11.9,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6522,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1z_J7gOqOmC5Q6Tgtdq19iz3ZkLqOKTXs",
    "number": 88,
    "folderName": "Santa Claus & Mrs Claus",
    "title": "Casal Papai Noel & Mamãe Noel Abraçados",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/1PQTosdzEzz-2u1S8Au-qN629FfAOxdr2=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1PQTosdzEzz-2u1S8Au-qN629FfAOxdr2=w800"
    ],
    "files": [
      {
        "id": "15nV_hb9QR96Cp2Y8WMKcyAewFX6wOAGY",
        "name": "MrsClaus.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15nV_hb9QR96Cp2Y8WMKcyAewFX6wOAGY"
      },
      {
        "id": "19V9NrDVMdTHpQsjZw_qjqBYtIBQrsTft",
        "name": "Santa_1.stl",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19V9NrDVMdTHpQsjZw_qjqBYtIBQrsTft"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1z_J7gOqOmC5Q6Tgtdq19iz3ZkLqOKTXs",
    "specs": {
      "weightGrams": 207,
      "printTimeHours": 12.4,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 6799,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "14Zb1OftEUTwyxp02dXrQdIWWBq3q019t",
    "number": 89,
    "folderName": "Santa Claus & Goblin",
    "title": "Papai Noel Anão Guerreiro & Duende Gobla (Santa Squatus)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1fqDtDvDv3f_uAlt5oIltJAgPuOc7nV2I=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1fqDtDvDv3f_uAlt5oIltJAgPuOc7nV2I=w800",
      "https://lh3.googleusercontent.com/d/1pakSVITKVUZEVSiEUVOuA5NmOJFaOxjo=w800",
      "https://lh3.googleusercontent.com/d/1f3629TqKNT2mb1chKRqTHPGrfTMV7ohD=w800"
    ],
    "files": [
      {
        "id": "1e-fkDjcv9LhoXb8tSPeHWr35eTUg2lXu",
        "name": "Santa Squatus and Gobla.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e-fkDjcv9LhoXb8tSPeHWr35eTUg2lXu"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/14Zb1OftEUTwyxp02dXrQdIWWBq3q019t",
    "specs": {
      "weightGrams": 64,
      "printTimeHours": 5.3,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7076,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "11ti7gRh_U_SmcLWrSilx_BwnxDU_aPSl",
    "number": 90,
    "folderName": "Santa Claus & Deadpool",
    "title": "Deadpool Papai Noel com Gorro e Espadas",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1gashYVRZZeW-YZhcbRGncC5WAzpM3Xuq=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1gashYVRZZeW-YZhcbRGncC5WAzpM3Xuq=w800",
      "https://lh3.googleusercontent.com/d/1XB-zQHMJUvSFrk6Q8h4-BNdUYCfnbdte=w800",
      "https://lh3.googleusercontent.com/d/1xhsjH6_GtIjTOzSumCiU-1XML8COvfi-=w800",
      "https://lh3.googleusercontent.com/d/16ul14gaKqAp0XwN1BD8DuCKIYSb_rbkg=w800",
      "https://lh3.googleusercontent.com/d/1_4p5G08GJvqw7MJ5hmXJMG38F_rqX1L4=w800",
      "https://lh3.googleusercontent.com/d/17CbX7Ie78KmS1jvsLe75K-lVozLZ520e=w800",
      "https://lh3.googleusercontent.com/d/18x5I9vijN4scOs33sgmyHxwAggqY6dTs=w800",
      "https://lh3.googleusercontent.com/d/155nNOb5G6wM6bqonpPsflq1a1CfszC8I=w800"
    ],
    "files": [
      {
        "id": "1jLcLadJtM5BznrKfsFvDuwLgQxOzgtAg",
        "name": "SANTA CLAUS 2_@stl_zone.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jLcLadJtM5BznrKfsFvDuwLgQxOzgtAg"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/11ti7gRh_U_SmcLWrSilx_BwnxDU_aPSl",
    "specs": {
      "weightGrams": 101,
      "printTimeHours": 7.4,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7353,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1660e8jUbbcCisIeIYaxyESe4PZYEuSGR",
    "number": 91,
    "folderName": "Reindeer Phone Stand",
    "title": "Suporte para Celular Rena Natalina Fofa",
    "category": "utilidades",
    "categoryLabel": "Cortadores & Acessórios",
    "tagType": "Suporte Celular",
    "imageUrl": "https://lh3.googleusercontent.com/d/1i-ozQmtFQjv4-oJD5RLDjFua8c7TmnSu=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1i-ozQmtFQjv4-oJD5RLDjFua8c7TmnSu=w800"
    ],
    "files": [
      {
        "id": "1X2FghOp4fGRmVcf6ENdvlo_BD22MXSye",
        "name": "Cute Reindeer Phone Stand.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X2FghOp4fGRmVcf6ENdvlo_BD22MXSye"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1660e8jUbbcCisIeIYaxyESe4PZYEuSGR",
    "specs": {
      "weightGrams": 138,
      "printTimeHours": 8.7,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7630,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1BlhgIYl3CA3305nmnqk9nGHTIRP6SGru",
    "number": 92,
    "folderName": "Reindeer Wall",
    "title": "Cabeça de Rena Geométrica Escultura de Parede",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Parede",
    "imageUrl": "https://lh3.googleusercontent.com/d/1t--dUbJbHxC9d6M-rRKzP9YUL1V9n5QK=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1t--dUbJbHxC9d6M-rRKzP9YUL1V9n5QK=w800"
    ],
    "files": [
      {
        "id": "1jjGMP8pNJGo5x13505jqoOBTLBtkHzsF",
        "name": "Reindeers.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jjGMP8pNJGo5x13505jqoOBTLBtkHzsF"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BlhgIYl3CA3305nmnqk9nGHTIRP6SGru",
    "specs": {
      "weightGrams": 175,
      "printTimeHours": 9.3,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 7907,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1QIwxLGI3BLzqUpA9ZMnPbgycthBSpJb9",
    "number": 93,
    "folderName": "Reindeer Kit Card Full Body",
    "title": "Kit Card Rena 3D de Corpo Inteiro (Full Body)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Kit Card",
    "imageUrl": "https://lh3.googleusercontent.com/d/12_HGrGek1OqPF6LzYR49BT-_wU1JWPAC=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/12_HGrGek1OqPF6LzYR49BT-_wU1JWPAC=w800"
    ],
    "files": [
      {
        "id": "1AJSeyu49CQwFdbv5ZbTGBvRGTHXXG2T3",
        "name": "Full_Body_Reindeer_card.3mf",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AJSeyu49CQwFdbv5ZbTGBvRGTHXXG2T3"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1QIwxLGI3BLzqUpA9ZMnPbgycthBSpJb9",
    "specs": {
      "weightGrams": 212,
      "printTimeHours": 16.3,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8184,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1OrYLOJLPdbRHJOH1Lm2luo-amhKABCQr",
    "number": 94,
    "folderName": "Reindeer Mad",
    "title": "Rena Maluca Articulada Print-in-Place (Mad Reindeer)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Articulado",
    "imageUrl": "https://lh3.googleusercontent.com/d/1L75WOBUwFDUOXmgVzr1OU-irIqQ6a60T=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1L75WOBUwFDUOXmgVzr1OU-irIqQ6a60T=w800"
    ],
    "files": [
      {
        "id": "1livwlJ5oe4D7TZx4owDlq6izD_8D0MjH",
        "name": "Articulated Mad Reindeer.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1livwlJ5oe4D7TZx4owDlq6izD_8D0MjH"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1OrYLOJLPdbRHJOH1Lm2luo-amhKABCQr",
    "specs": {
      "weightGrams": 69,
      "printTimeHours": 4.6,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8461,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1ISEUK93b8Yo_WFHzSLgmIOtRY3H37EW1",
    "number": 95,
    "folderName": "Reindeer & Christmas Tree",
    "title": "Diorama Rena Encantada com Pinheiro de Natal",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Diorama",
    "imageUrl": "https://lh3.googleusercontent.com/d/1kBJzSddV8NoJxFD9kcIha8mIhPKwDvRZ=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1kBJzSddV8NoJxFD9kcIha8mIhPKwDvRZ=w800"
    ],
    "files": [
      {
        "id": "13Hf1yjGkX_Ayv_a5OGXEpDN-sTyh_TFD",
        "name": "christmas-tree-and-reindeer.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13Hf1yjGkX_Ayv_a5OGXEpDN-sTyh_TFD"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ISEUK93b8Yo_WFHzSLgmIOtRY3H37EW1",
    "specs": {
      "weightGrams": 106,
      "printTimeHours": 6,
      "filament": "PLA Verde Esmeralda / Pinheiro",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 8738,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1Yy0xQ8Mi_MQUSEZi-dz4OpwibOG_UwKf",
    "number": 96,
    "folderName": "Reindeer 2",
    "title": "Filhote de Rena Caribu Natalino Fofo (Calf)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1QYo1ezk376RiGWe90KONsZsmQzeGV-xp=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1QYo1ezk376RiGWe90KONsZsmQzeGV-xp=w800"
    ],
    "files": [
      {
        "id": "1RXZtkro0hrZ3wE75c-cx1Vb--rgBfQKS",
        "name": "Reindeer Caribou Calf.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RXZtkro0hrZ3wE75c-cx1Vb--rgBfQKS"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Yy0xQ8Mi_MQUSEZi-dz4OpwibOG_UwKf",
    "specs": {
      "weightGrams": 143,
      "printTimeHours": 11.4,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9015,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1XOSemZMytIW70PgRLlTx8Lhl7ubfEsq4",
    "number": 97,
    "folderName": "Reindeer 3",
    "title": "Rena Caribu Adulto Imponente em Bramido (Bull Calling)",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Estátua",
    "imageUrl": "https://lh3.googleusercontent.com/d/1EV3js5z6wXeJoCVzBzhmK14a3WCeyHaD=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1EV3js5z6wXeJoCVzBzhmK14a3WCeyHaD=w800"
    ],
    "files": [
      {
        "id": "1qlPypPXfRvaV3JXGabnlvlaHR2_WLmjw",
        "name": "Reindeer Caribou Bull Calling.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qlPypPXfRvaV3JXGabnlvlaHR2_WLmjw"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1XOSemZMytIW70PgRLlTx8Lhl7ubfEsq4",
    "specs": {
      "weightGrams": 180,
      "printTimeHours": 12.6,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9292,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1cdwOjQ6bEZMHRPhQLhgRL_6DY3UFtg4W",
    "number": 98,
    "folderName": "Pokemon 4",
    "title": "Snorlax Pokémon com Gorro de Papai Noel (Santa Snorlax)",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Geek",
    "imageUrl": "https://lh3.googleusercontent.com/d/1jveMpDKO7ak5th1APxF1Pr6Lh4OB5Zg9=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1jveMpDKO7ak5th1APxF1Pr6Lh4OB5Zg9=w800"
    ],
    "files": [
      {
        "id": "1AcshZNuDTRTLMvAqwfiO2gyhJeFY6xqt",
        "name": "Santa Snorlax.7z",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AcshZNuDTRTLMvAqwfiO2gyhJeFY6xqt"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cdwOjQ6bEZMHRPhQLhgRL_6DY3UFtg4W",
    "specs": {
      "weightGrams": 37,
      "printTimeHours": 2.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9569,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "1y5l33L-9kN1qVRMnER9SY8w_1NSBtqjO",
    "number": 99,
    "folderName": "Polina",
    "title": "Garota Pin-Up Natalina Polina Colecionável",
    "category": "papai_noel",
    "categoryLabel": "Papai Noel & Figuras",
    "tagType": "Colecionável",
    "imageUrl": "https://lh3.googleusercontent.com/d/1SGKX7ZeGRBayMlh2jROi0T4DyNQCfRyB=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1SGKX7ZeGRBayMlh2jROi0T4DyNQCfRyB=w800"
    ],
    "files": [
      {
        "id": "1H2LsX0Ce6uLYgNGZY3Bs-3Sc5EvG9crM",
        "name": "Polina - Christmas Pin Up Girl.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1H2LsX0Ce6uLYgNGZY3Bs-3Sc5EvG9crM"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1y5l33L-9kN1qVRMnER9SY8w_1NSBtqjO",
    "specs": {
      "weightGrams": 74,
      "printTimeHours": 6.2,
      "filament": "PLA Silk Dourado / Vermelho",
      "infill": "15% Giroide",
      "supports": "Suportes em árvore (Tree supports)",
      "layerHeight": "0.16mm Padrão Ouro",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 9846,
    "isNew": true,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  },
  {
    "id": "13UHcKoiFnFmXA-a-5bi6GCKBJNMzmFBT",
    "number": 100,
    "folderName": "Reindeer Kit Card",
    "title": "Kit Card Rena Natalina Dobrável para Presente",
    "category": "renas",
    "categoryLabel": "Renas & Animais",
    "tagType": "Kit Card",
    "imageUrl": "https://lh3.googleusercontent.com/d/1ub4qC-igqtAiZu4th9aQo_EhTRHzjRnb=w800",
    "additionalImages": [
      "https://lh3.googleusercontent.com/d/1ub4qC-igqtAiZu4th9aQo_EhTRHzjRnb=w800"
    ],
    "files": [
      {
        "id": "11a12spReCJJJmNYK9ALqmpqTQ630zywb",
        "name": "Christmas_Reindeer_kit_card.zip",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11a12spReCJJJmNYK9ALqmpqTQ630zywb"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/13UHcKoiFnFmXA-a-5bi6GCKBJNMzmFBT",
    "specs": {
      "weightGrams": 111,
      "printTimeHours": 8.1,
      "filament": "PLA Marrom Madeira / Dourado",
      "infill": "15% Giroide",
      "supports": "Sem suportes (Print-in-place)",
      "layerHeight": "0.20mm",
      "nozzle": "0.4mm"
    },
    "downloadsCount": 10123,
    "isNew": false,
    "description": "Arquivo STL de altíssima qualidade da coleção natalina. Projeto pronto para impressão 3D, otimizado para fatiamento com excelente acabamento e alta lucratividade em feiras e encomendas de Natal."
  }
];

export const CHRISTMAS_CATEGORIES = [
  { id: "all", label: "Início (Todos os Modelos)", count: 100, icon: "Sparkles" },
  { id: "papai_noel", label: "Papai Noel & Figuras", count: 40, icon: "User" },
  { id: "arvores", label: "Árvores & Pinheiros", count: 27, icon: "Trees" },
  { id: "renas", label: "Renas & Animais", count: 12, icon: "Compass" },
  { id: "luminarias", label: "Luminárias & Decoração", count: 5, icon: "Sun" },
  { id: "presepios", label: "Presépios & Sagrado", count: 5, icon: "Church" },
  { id: "utilidades", label: "Cortadores & Acessórios", count: 11, icon: "Layers" },
] as const;
