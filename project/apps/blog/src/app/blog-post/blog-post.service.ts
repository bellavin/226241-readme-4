import { Injectable } from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { Post } from '@project/shared/app-types';
import { BasePostDto } from './dto/base-post.dto';
import { BaseBlogPostEntity } from './blog-post.entity';

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostRepository) {}

  async createPost(dto: BasePostDto): Promise<Post> {
    const postEntity = new BaseBlogPostEntity({ ...dto, comments: [] });
    return this.blogPostRepository.create(postEntity);
  }

  async deletePost(id: number): Promise<void> {
    this.blogPostRepository.destroy(id);
  }

  async getPost(id: number): Promise<Post> {
    return this.blogPostRepository.findById(id);
  }

  async getPosts(): Promise<Post[]> {
    return this.blogPostRepository.find();
  }

  async updatePost(id: number, dto: BasePostDto): Promise<Post> {
    return this.blogPostRepository.update(id, new BaseBlogPostEntity(dto));
  }
}
