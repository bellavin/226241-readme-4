import { BasePostDto } from './base-post.dto';

export class PostTextDto extends BasePostDto {
  public title: string;
  public publicationAnnouncement: string;
  public publicationContent: string;
}
