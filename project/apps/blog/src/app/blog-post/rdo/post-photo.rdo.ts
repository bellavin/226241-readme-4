import { Expose } from 'class-transformer';
import { BasePostRdo } from './base-post.rdo';

export class PostPhotoRdo extends BasePostRdo {
  @Expose()
  public photoFile: string;
}
