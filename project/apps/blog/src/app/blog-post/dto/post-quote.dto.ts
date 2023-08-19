import { BasePostDto } from './base-post.dto';

export class PostQuoteDto extends BasePostDto {
  public quoteContent: string;
  public quoteAuthor: string;
}
