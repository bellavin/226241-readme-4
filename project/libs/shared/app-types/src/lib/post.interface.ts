import { Comment } from './comment.interface';
import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';

export interface BasePost {
  id?: number;
  userId: string;
  comments?: Comment[];
  postType: PostType;
  publishAt: Date;
  createdAt: Date;
  postStatus: PostStatus;
  isReposted?: boolean;
  originalAuthorId?: string;
  originalPostId?: string;
  tags?: string[];
}

export interface PostVideo extends BasePost {
  title: string;
  videoURL: string;
}

export interface PostText extends BasePost {
  title: string;
  publicationAnnouncement: string;
  publicationContent: string;
}

export interface PostQuote extends BasePost {
  quoteContent: string;
  quoteAuthor: string;
}

export interface PostPhoto extends BasePost {
  photoFile: string;
}

export interface PostLink extends BasePost {
  linkURL: string;
  description?: string;
}

// export type Post = Partial<
//   PostVideo & PostText & PostQuote & PostPhoto & PostLink
// >;

export type Post = BasePost;
