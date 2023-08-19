import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BlogPostModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
