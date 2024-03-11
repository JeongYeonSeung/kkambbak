import { Column, Entity } from 'typeorm';
import { CommonBigPKEntity } from './common.entity';

@Entity('Detail')
export class DetailEntity extends CommonBigPKEntity {
  @Column('date', { unique: false, nullable: false })
  date: Date;

  @Column('time', { unique: false, nullable: false })
  time: string;

  @Column('datetime', { unique: false, nullable: true })
  repeatEnd: Date;

  @Column('varchar', { unique: false, nullable: true })
  repeatType: string;

  @Column('integer', { unique: false, nullable: true })
  repeatFrequency: number;

  @Column('varchar', { unique: false, nullable: true })
  repeatDayOfWeek: string;

  @Column('integer', { unique: false, nullable: true })
  repeatDayOfMonth: number;
}
