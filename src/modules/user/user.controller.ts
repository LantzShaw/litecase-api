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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { UsereDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  //   @Get()
  //   getUser(@Query() { id }) {
  //     return this.userService.findOne(id);
  //   }

  //  x-www-form-urlencoded
  //   @Post()
  //   createUser(@Body() { userInfo }) {
  //     console.log('-------user info-------', userInfo);
  //   }

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  createUser(@Body() { userInfo }) {
    console.log('-------user info-------', userInfo);

    return { userInfo };
  }

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
