import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class PostVideoRdo extends BasePostRdo {
  @Expose()
  public title: string;

  @Expose()
  public videoURL: string;
}
