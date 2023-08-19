import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class PostTextRdo extends BasePostRdo {
  @Expose()
  public title: string;

  @Expose()
  public publicationAnnouncement: string;

  @Expose()
  public publicationContent: string;
}
