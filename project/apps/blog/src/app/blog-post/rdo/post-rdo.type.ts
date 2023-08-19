import { PostVideoRdo } from './post-video.rdo';
import { PostTextRdo } from './post-text.rdo';
import { PostQuoteRdo } from './post-quote.rdo';
import { PostPhotoRdo } from './post-photo.rdo';
import { PostLinkRdo } from './post-link.rdo';

export type PostRdoType =
  | PostVideoRdo
  | PostTextRdo
  | PostQuoteRdo
  | PostPhotoRdo
  | PostLinkRdo;
