export interface StlImage {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
}

export interface StlFile {
  id: string;
  name: string;
  downloadUrl: string;
  viewUrl: string;
}

export interface StlItem {
  id: string;
  folderId?: string;
  folderName?: string;
  folderUrl?: string;
  title: string;
  category: string;
  description: string;
  weightGrams?: number;
  printTime?: string;
  suggestedPrice?: string;
  profitEstimate?: string;
  image: string;
  fallbackImage?: string;
  images: StlImage[];
  stls: StlFile[];
  recommendedLayer?: string;
  infill?: string;
  support?: string;
  isFromUserDrive?: boolean;
  isCatholic?: boolean;
  materials?: string[];
  dimensions?: string;
}

export interface DriveFolderInfo {
  folder_id: string;
  folder_name: string;
  folder_url: string;
  images: Array<{ id: string; name: string }>;
  stls: Array<{ id: string; name: string }>;
}
