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


### The end

some links:

https://juejin.cn/post/7076629305874186276
sequelize demo: 
https://github.com/SephirothKid/nest-zero-to-one

jwt:
https://github.com/HeyiMaster/nest-starter