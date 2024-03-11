import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonBigPKEntity } from './common.entity';
import { UserEntity } from './user.entity';
import { ChecklistEntity } from './checklist.entity';
import { DetailEntity } from './detail.entity';

@Entity('Schedule')
export class ScheduleEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: false, nullable: false })
  title: string;

  @Column('text', { unique: false, nullable: true })
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.schedules)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;

  @OneToMany(() => ChecklistEntity, (checklist) => checklist.schedule)
  checklists: ChecklistEntity[];

  @OneToOne(() => DetailEntity)
  @JoinColumn({ name: 'detailId' })
  detail: DetailEntity;
}
