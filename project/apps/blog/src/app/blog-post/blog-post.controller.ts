import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { fillObject } from '@project/util/util-core';
import { BasePost } from '@project/shared/app-types';
import { BasePostRdo } from './rdo/base-post.rdo';
import { BasePostDto } from './dto/base-post.dto';

@Controller('posts')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    const post = await this.blogPostService.getPost(postId);
    return fillObject(BasePostRdo, post);
  }

  @Get('/')
  async index() {
    const posts = await this.blogPostService.getPosts();
    return fillObject(BasePostRdo, posts);
  }

  @Post('/')
  public async create(@Body() dto: BasePostDto): Promise<BasePost> {
    const newPost = await this.blogPostService.createPost(dto);
    return fillObject(BasePostRdo, newPost);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: BasePostDto) {
    const postId = parseInt(id, 10);
    const updatedPost = await this.blogPostService.updatePost(postId, dto);
    return fillObject(BasePostRdo, updatedPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    this.blogPostService.deletePost(postId);
  }
}
