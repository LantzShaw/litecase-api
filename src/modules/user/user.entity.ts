import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity({ name: 'user' })
@Entity('user', { schema: 'orm' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'User_id' })
  user_id: number;

  @Column('varchar', { name: 'user_name', length: 20 })
  user_name: string;

  @Column('varchar', { name: 'user_password', length: 20 })
  user_password: string;

  @Column('date')
  created_at: Date;
}
