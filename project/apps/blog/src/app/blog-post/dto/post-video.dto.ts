import { BasePostDto } from './base-post.dto';

export class PostVideoDto extends BasePostDto {
  public title: string;
  public videoURL: string;
}
