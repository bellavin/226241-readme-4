// export enum PostType {
//   Video = 'video',
//   Text = 'text',
//   Quote = 'quote',
//   Photo = 'photo',
//   Link = 'link',
// }

export const PostType: {
  [x: string]: 'video' | 'text' | 'quote' | 'photo' | 'link';
} = {
  Video: 'video',
  Text: 'text',
  Quote: 'quote',
  Photo: 'photo',
  Link: 'link',
};

export type PostType = (typeof PostType)[keyof typeof PostType];
