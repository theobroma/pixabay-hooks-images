export interface PicturesDataType {
  hits: HitsEntityType[];
  total: number;
  totalHits: number;
}
export interface HitsEntityType {
  collections: number; // new
  comments: number;
  downloads: number;
  // favorites: number; deprecated
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user_id: number;
  user: string;
  userImageURL: string;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}
