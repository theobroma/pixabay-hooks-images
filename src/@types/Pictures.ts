import * as z from 'zod';
// ===Original Types===
// export interface PicturesDataResponseType {
//   hits: HitsEntityType[];
//   total: number;
//   totalHits: number;
// }
// export interface HitsEntityType {
//   collections: number; // new
//   comments: number;
//   downloads: number;
//   // favorites: number; deprecated
//   id: number;
//   imageHeight: number;
//   imageSize: number;
//   imageWidth: number;
//   largeImageURL: string;
//   likes: number;
//   pageURL: string;
//   previewHeight: number;
//   previewURL: string;
//   previewWidth: number;
//   tags: string;
//   type: string;
//   user_id: number;
//   user: string;
//   userImageURL: string;
//   views: number;
//   webformatHeight: number;
//   webformatURL: string;
//   webformatWidth: number;
// }

// ===Schemas===
export const HitsEntitySchema = z.object({
  collections: z.number(),
  comments: z.number(),
  downloads: z.number(),
  id: z.number(),
  imageHeight: z.number(),
  imageSize: z.number(),
  imageWidth: z.number(),
  largeImageURL: z.string(),
  likes: z.number(),
  pageURL: z.string(),
  previewHeight: z.number(),
  previewURL: z.string(),
  previewWidth: z.number(),
  tags: z.string(),
  type: z.string(),
  user_id: z.number(),
  user: z.string(),
  userImageURL: z.string(),
  views: z.number(),
  webformatHeight: z.number(),
  webformatURL: z.string(),
  webformatWidth: z.number(),
});
export type HitsEntityType = z.infer<typeof HitsEntitySchema>;

export const PicturesDataResponseSchema = z.object({
  hits: z.array(HitsEntitySchema),
  total: z.number(),
  totalHits: z.number(),
});
export type PicturesDataResponseType = z.infer<
  typeof PicturesDataResponseSchema
>;
