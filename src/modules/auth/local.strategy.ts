// import { Strategy } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('auth validation');

    return { username, password };

    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException(
        { message: 'authorized failed', error: 'please try again later.' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }
}
