import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// NOTE: user 对应的是表名称
// @Entity({ name: 'user' })
@Entity('user', { schema: 'orm' })
export class UserEntity {
  // @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @PrimaryColumn({ type: 'uuid' })
  id: number;

  @Column('varchar', { name: 'username', length: 20 })
  username: string;

  @Column('varchar', { name: 'email', length: 20 })
  email: string;

  @Column('varchar', { name: 'password', length: 20 })
  password: string;

  @Column('date')
  createdAt: Date;

  // @Column('date')
  // updatedAt: Date;
}
