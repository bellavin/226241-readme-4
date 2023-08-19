import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class PostLinkRdo extends BasePostRdo {
  @Expose()
  public linkURL: string;

  @Expose()
  public description: string;
}
