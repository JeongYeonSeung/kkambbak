import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { CommonBigPKEntity } from './common.entity';

@Entity('Checklist')
export class ChecklistEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: false, nullable: false })
  title: string;

  @Column('boolean', { unique: false, nullable: false })
  isChecked: boolean;

  @ManyToOne(() => ScheduleEntity, (schedule) => schedule.checklists)
  @JoinColumn({ name: 'scheduleId', referencedColumnName: 'id' })
  schedule: ScheduleEntity;
}
