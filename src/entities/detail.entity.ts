import { Column, Entity } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';

@Entity('Detail')
export class DetailEntity extends CommonBigPKEntity {
  @Column('date', { name: 'date', unique: false, nullable: false })
  date: Date;

  @Column('time', { name: 'time', unique: false, nullable: false })
  time: string;

  @Column('datetime', { name: 'repeate_end', unique: false, nullable: true })
  repeatEnd: Date;

  @Column('varchar', { name: 'repeat_type', unique: false, nullable: true })
  repeatType: string;

  @Column('integer', {
    name: 'repeat_frequency',
    unique: false,
    nullable: true,
  })
  repeatFrequency: number;

  @Column('varchar', {
    name: 'repeat_day_of_week',
    unique: false,
    nullable: true,
  })
  repeatDayOfWeek: string;

  @Column('integer', {
    name: 'repeat_day_of_month',
    unique: false,
    nullable: true,
  })
  repeatDayOfMonth: number;
}
