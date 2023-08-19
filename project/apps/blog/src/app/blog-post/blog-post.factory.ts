import { PostType } from '@project/shared/app-types';
import { fillObject } from '@project/util/util-core';
import {
  BlogVideoPostEntity,
  // PostTextEntity,
  // PostQuoteEntity,
  // PostPhotoEntity,
  // PostLinkEntity,
} from './blog-post.entity';
import { PostVideoRdo } from './rdo/post-video.rdo';
import { PostTextRdo } from './rdo/post-text.rdo';
import { PostQuoteRdo } from './rdo/post-quote.rdo';
import { PostPhotoRdo } from './rdo/post-photo.rdo';
import { PostLinkRdo } from './rdo/post-link.rdo';

export class PostFactory {
  public getEntity(post) {
    switch (post.type) {
      case PostType.Video:
        return new BlogVideoPostEntity(post);
      // case PostType.Text:
      //   return new PostTextEntity(post);
      // case PostType.Quote:
      //   return new PostQuoteEntity(post);
      // case PostType.Photo:
      //   return new PostPhotoEntity(post);
      // case PostType.Link:
      //   return new PostLinkEntity(post);
      default:
        console.log(`Add Entity for type: ${post.type}`);
    }
  }

  public getRdo(postData) {
    const post = { ...postData, ...postData.data };

    switch (post.type) {
      case PostType.Video:
        return fillObject(PostVideoRdo, post);
      case PostType.Text:
        return fillObject(PostTextRdo, post);
      case PostType.Quote:
        return fillObject(PostQuoteRdo, post);
      case PostType.Photo:
        return fillObject(PostPhotoRdo, post);
      case PostType.Link:
        return fillObject(PostLinkRdo, post);
      default:
        console.log(`Add RDO for type: ${post.type}`);
    }
  }
}
