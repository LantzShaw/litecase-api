import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

import { StatusMonitorModule } from 'nest-status-monitor';
import statusMonitorConfig from './config/statusMonitorConfig';

@Module({
  imports: [
    StatusMonitorModule.setUp(statusMonitorConfig),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'litecase',
      synchronize: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
  ],
  // controllers: [AppController, UserController],
  // providers: [AppService, UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 user 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST }) // user路由的POST方法
      .forRoutes('user');
  }
}
