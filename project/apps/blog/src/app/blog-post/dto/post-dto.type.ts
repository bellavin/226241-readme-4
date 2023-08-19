import { PostVideoDto } from './post-video.dto';
import { PostTextDto } from './post-text.dto';
import { PostQuoteDto } from './post-quote.dto';
import { PostPhotoDto } from './post-photo.dto';
import { PostLinkDto } from './post-link.dto';

export type PostDtoType =
  | PostVideoDto
  | PostTextDto
  | PostQuoteDto
  | PostPhotoDto
  | PostLinkDto;
