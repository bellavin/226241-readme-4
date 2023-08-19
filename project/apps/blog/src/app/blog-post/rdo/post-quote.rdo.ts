import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class PostQuoteRdo extends BasePostRdo {
  @Expose()
  public quoteContent: string;

  @Expose()
  public quoteAuthor: string;
}
