import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getSchedule(scheduleId: string) {
    const schedule = await this.scheduleRepository.findOne({
      where: {
        id: scheduleId,
      },
    });

    return schedule;
  }

  async modifySchedule(scheduleId: string, title: string, description: string) {
    const schedule = await this.scheduleRepository.findOne({
      where: {
        id: scheduleId,
      },
    });

    if (!schedule) {
      throw new NotFoundException('일정 정보를 찾는데 실패했습니다.');
    }

    const updateResult = await this.scheduleRepository.update(
      { id: scheduleId },
      {
        title: title,
        description: description,
      },
    );

    return { affected: updateResult?.affected };
  }

  async removeSchedule(scheduleId: string) {
    await this.scheduleRepository.softDelete({
      id: scheduleId,
    });
  }
}
