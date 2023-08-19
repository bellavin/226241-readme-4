import { PostStatus, PostType, Comment } from '@project/shared/app-types';
import { Expose } from 'class-transformer';

export class BasePostRdo {
  @Expose()
  public postId: number;

  @Expose()
  public userId: string;

  @Expose()
  public comments: Comment[];

  @Expose()
  public postType: PostType;

  @Expose()
  public publishAt: Date;

  @Expose()
  public createdAt: Date;

  @Expose()
  public postStatus: PostStatus;

  @Expose()
  public isReposted: boolean;

  @Expose()
  public originalAuthorId: string;

  @Expose()
  public originalPostId: string;

  @Expose()
  public tags: string[];
}
