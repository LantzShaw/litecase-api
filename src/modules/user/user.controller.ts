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
  UseGuards,
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
  ApiExtension,
  ApiOperation,
} from '@nestjs/swagger';
import { ValidationPipe } from '../../common/pipes/validation.pipe';
import { UsereDto } from './user.dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('user')
@UseGuards(RoleGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiExtension('x-author', 'DoveAz')
  @ApiOperation({
    summary: '哈哈',
    description: '你好啊',
  })
  @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
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
    // NOTE: 相当于 @Param('id) id
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
