import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import {
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';
import { ValidationPipe } from '../../common/pipes/validation.pipe';
import { UsereDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get()
  @ApiQuery({ name: 'id', required: true })
  getUser(@Query() { id }) {
    return this.userService.findOne(id);
  }

  // NOTE: x-www-form-urlencoded
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userInfo: UsereDto) {
    console.log('-------user info-------', userInfo);

    this.userService.createUser(userInfo);

    return userInfo;
  }

  // @UseInterceptors(FileInterceptor('file'))
  // @Post()
  // createUser(@Body() { userInfo }) {
  //   console.log('-------create user-------', userInfo);

  //   return { userInfo };
  // }

  @Delete()
  removeUserById(@Query() { id }) {
    console.log('------remove user id-------', id);
  }

  // NOTE: 也可以用Patch
  @Put(':id')
  updateUserById(@Param() { id }) {
    console.log('-------update user id-------', id);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(
    @Body() body: UsereDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('-------file-------', file, body);
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
