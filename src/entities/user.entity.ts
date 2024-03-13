import { Column, Entity, OneToMany } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity('User')
export class UserEntity extends CommonBigPKEntity {
  @Column('varchar', { name: 'username', unique: true, nullable: false })
  username: string;

  @Column('varchar', { name: 'display_name', unique: false, nullable: false })
  displayName: string;

  @Column('varchar', { name: 'password', unique: false, nullable: false })
  password: string;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.user)
  schedules: ScheduleEntity[];
}
