import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Auth, GetUser } from 'src/auth/decorators';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from '../auth/entities/user.entity';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post(':id_post')
    @Auth()
    create(
        @Body() createCommentDto: CreateCommentDto,
        @GetUser() user: User,
        @Param('id_post') id_post: string,
    ) {
        return this.commentsService.create(createCommentDto, user, id_post);
    }

    // TODO: GetAll comments from POST paginated

    // TODO: Delete comment
    @Delete(':id')
    @Auth()
    remove(@Param('id') id: string, @GetUser() user: User) {
        return this.commentsService.remove(id, user);
    }
}
