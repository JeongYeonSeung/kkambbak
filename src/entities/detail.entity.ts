import { Column, Entity, OneToOne } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity('detail')
export class DetailEntity extends CommonBigPKEntity {
  @Column('date', { unique: false, nullable: false })
  date: Date;

  @Column('time', { unique: false, nullable: false })
  time: string;

  @Column('datetime', { unique: false, nullable: true })
  repeat_end: Date;

  @Column('varchar', { unique: false, nullable: true })
  repeat_type: string;

  @Column('integer', { unique: false, nullable: true })
  repeat_frequency: number;

  @Column('varchar', { unique: false, nullable: true })
  repeat_day_of_week: string;

  @Column('integer', { unique: false, nullable: true })
  repeat_day_of_month: number;

  @OneToOne(() => ScheduleEntity, (schedule) => schedule.detail)
  schedule: ScheduleEntity;
}
