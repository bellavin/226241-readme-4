export const PostStatus: {
  [x: string]: 'published' | 'draft';
} = {
  Published: 'published',
  Draft: 'draft',
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus];

// export enum PostStatus {
//   Published = 'published',
//   Draft = 'draft',
// }
