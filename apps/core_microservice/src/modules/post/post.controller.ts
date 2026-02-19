import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ROUTES } from '@innogram/shared';

@Controller(ROUTES.POSTS.ROOT)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create() {
    return this.postService.create();
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.postService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
