import { Controller, Get, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('/auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
}
