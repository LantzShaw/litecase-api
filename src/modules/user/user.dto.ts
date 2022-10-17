import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class UsereDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是 String 类型' })
  readonly username: string;

  @IsString({ message: '密码必须是 String 类型' })
  readonly email: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须是 String 类型' })
  readonly password: string;
}
