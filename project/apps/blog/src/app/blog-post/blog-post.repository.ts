import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { BaseBlogPostEntity, BlogPostEntityType } from './blog-post.entity';
import { Post } from '@project/shared/app-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogPostRepository
  implements CRUDRepository<BlogPostEntityType, number, Post>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BaseBlogPostEntity): Promise<Post> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: [],
        },
      },
      include: {
        comments: true,
      },
    });
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId,
      },
    });
  }

  public async findById(postId: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        postId,
      },
      include: {
        comments: true,
      },
    });
  }

  public find(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        comments: true,
      },
    });
  }

  public update(postId: number, item: BaseBlogPostEntity): Promise<Post> {
    return this.prisma.post.update({
      where: {
        postId,
      },
      data: {
        ...item.toObject(),
        comments: {
          connect: [],
        },
      },
    });
  }
}
