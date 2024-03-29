# Record

### nest 微生成器

```sh
nest --help

# controller
nest g controller user modules
or
nest g co user modules


# service
nest g service user modules
or
nest g s user modules

# module
nest g module user modules
or
nest g mo user modules


nest g pipe validation common/pipes
```

**tip:** if you don't need `.spec` file, you can add `--no-spec` in the end.

### Questions

1. Express' has no exported member 'Multer'

```sh
$ npm install --save-dev @types/multer

# The link: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/47780
```

2. form-data and upload file

```sh
examples link:
https://github.com/nestjs/nest/blob/master/sample/29-file-upload/src/app.controller.ts

https://gabrieltanner.org/blog/nestjs-file-uploading-using-multer/

```

3. 如何自定义 swagger 样式 swagger-ui-express

```sh
https://github.com/scottie1984/swagger-ui-express

```

4. 使用`@nestjs/passport` 与 `passport-local` 的时候，报错 `Error: Cannot find module 'passport'`

```sh
# 需要安装 passport 依赖
$ pnpm add passport
```

### The end

some links:

https://juejin.cn/post/7076629305874186276
sequelize demo:
https://github.com/SephirothKid/nest-zero-to-one

jwt:
https://github.com/HeyiMaster/nest-starter

打造日志系统:
https://zhuanlan.zhihu.com/p/379827158

```sh
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getWeather() {
    return this.httpService.get('https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=c9661625b3eb09eed099288fbfad560a').pipe(
      map(response => response.data)
    );

  }
}

# 调用
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWeather() {
    const res = this.appService.getWeather();
    return res;
  }
}
```
