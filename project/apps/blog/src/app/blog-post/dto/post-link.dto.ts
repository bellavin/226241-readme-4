import { BasePostDto } from './base-post.dto';

export class PostLinkDto extends BasePostDto {
  public title: string;
  public videoURL: string;
}
