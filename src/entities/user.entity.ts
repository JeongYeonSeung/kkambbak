import { Column, Entity, OneToMany } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity('User')
export class UserEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: true, nullable: false })
  username: string;

  @Column('varchar', { unique: false, nullable: false })
  display_name: string;

  @Column('varchar', { unique: false, nullable: false })
  password: string;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.user)
  schedules: ScheduleEntity[];
}
