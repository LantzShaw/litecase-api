import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Connection,
  Like,
  MissingDeleteDateColumnError,
  MoreThan,
  Repository,
} from 'typeorm';
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
    console.log(
      '*************user*****************s',
      this.userRepository.find(),
    );

    return this.userRepository.find({
      select: ['id', 'email'],
      where: [
        {
          id: MoreThan(2),
          createdAt: MoreThan(new Date()),
        },
        {
          email: Like('%lantz%'),
        },
      ],
      take: 2,
      order: {
        id: 'ASC',
      },
    });

    // try {
    //   return this.userRepository.find();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async findOne(id: number): Promise<UserEntity> {
    // TODO: 新版本findOne()改成findOneBy({})

    try {
      return this.userRepository.findOneBy({ id: id });
    } catch (err) {
      console.log(err);
    }
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
