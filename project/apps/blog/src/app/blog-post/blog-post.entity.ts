import { Entity } from '@project/util/util-types';
import {
  Post,
  PostVideo,
  Comment,
  PostStatus,
  PostType,
} from '@project/shared/app-types';

export class BaseBlogPostEntity implements Entity<BaseBlogPostEntity>, Post {
  public id: number;
  public userId: string;
  public comments: Comment[];
  public postType: PostType;
  public publishAt: Date;
  public createdAt: Date;
  public postStatus: PostStatus;

  public isReposted: boolean;
  public originalAuthorId: string;
  public originalPostId: string;

  public tags: string[]; // "Набор тегов"

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity(entity: Post): void {
    this.id = entity.id;
    this.userId = entity.userId;
    this.comments = [];
    this.postType = entity.postType;
    this.publishAt = entity.publishAt;
    this.createdAt = new Date();
    this.postStatus = entity.postStatus;
    this.isReposted = false;
    this.originalAuthorId = entity.originalAuthorId;
    this.originalPostId = entity.originalPostId;
    this.tags = [];
  }

  public toObject(): BaseBlogPostEntity {
    return {
      ...this,
      comments: [...this.comments],
    };
  }
}

export class BlogVideoPostEntity extends BaseBlogPostEntity {
  public title: string;
  public videoURL: string;
  public postType: PostType;

  constructor(post: PostVideo) {
    super(post);
    this.postType = PostType.Video;
    this.fillEntity(post);
  }

  public fillEntity(entity: PostVideo): void {
    super.fillEntity(entity);
    this.title = entity.title;
    this.videoURL = entity.videoURL;
  }
}

export type BlogPostEntityType = BlogVideoPostEntity;
// | BlogTextPostEntity
// | BlogPhotoPostEntity
// | BlogQuotePostEntity
// | BlogLinkEPostntity;
