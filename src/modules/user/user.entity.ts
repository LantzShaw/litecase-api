import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity({ name: 'user' })
@Entity('user', { schema: 'orm' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username', length: 20 })
  username: string;

  @Column('varchar', { name: 'password', length: 20 })
  password: string;
}
