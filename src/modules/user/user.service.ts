import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, MissingDeleteDateColumnError, Repository } from 'typeorm';
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
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    // TODO: 新版本findOne()改成findOneBy({})
    return this.userRepository.findOneBy({ id: id });
  }

  async createUser(user): Promise<UserEntity> {
    const isExist = await this.userRepository.findOneBy({ id: user.id });

    if (isExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.userRepository.save(user);
  }

  async removeUserById(id): Promise<void> {
    this.userRepository.remove(id);
  }
}
