import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { CommonBigPKEntity } from './common.entity';

@Entity('Checklist')
export class ChecklistEntity extends CommonBigPKEntity {
  @Column('varchar', { name: 'title', unique: false, nullable: false })
  title: string;

  @Column('boolean', { name: 'is_checked', unique: false, nullable: false })
  isChecked: boolean;

  @ManyToOne(() => ScheduleEntity, (schedule) => schedule.checklists)
  @JoinColumn({ name: 'schedule_id', referencedColumnName: 'id' })
  schedule: ScheduleEntity;
}
