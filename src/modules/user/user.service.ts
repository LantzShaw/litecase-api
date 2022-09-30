import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

// @InjectRepository(UserEntity)
// private readonly userRepository: Repository<UserEntity>,
// private connection: Connection

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, //   private connection: Connection // 废弃了
  ) {}

  findAll(): Promise<UserEntity[]> {
    // return [
    //   { name: 'Lantz', gender: 'male' },
    //   { name: 'Fancy', gender: 'female' },
    // ];

    return this.userRepository.find();
  }

  //   async findOne(id: number): Promise<UserEntity> {
  //     // TODO: @nestjs/typeorm@8.0以上版本不支持最新的typeorm@3.0，所以id报红
  //     return this.userRepository.findOne(id);
  //   }
}
