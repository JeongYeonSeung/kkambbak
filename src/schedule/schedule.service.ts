import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleEntity } from 'src/entities/schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly scheduleRepository: Repository<ScheduleEntity>,
  ) {}

  async createSchedule(title: string, description: string, userId: string) {
    const schedule = await this.scheduleRepository.save({
      title: title,
      description: description,
      userId: userId,
    });

    return schedule;
  }
}
