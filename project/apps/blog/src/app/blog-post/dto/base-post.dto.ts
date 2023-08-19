import { Comment, PostStatus, PostType } from '@project/shared/app-types';

export class BasePostDto {
  public userId: string;
  public comments: Comment[];
  public postType: PostType;
  public publishAt: Date;
  public createdAt: Date;
  public postStatus: PostStatus;
  public isReposted?: boolean;
  public originalAuthorId?: string;
  public originalPostId?: string;
  public tags?: string[];
}
