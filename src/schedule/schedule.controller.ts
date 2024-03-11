import { Body, Controller, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { User } from 'src/decorators/user.decorator';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async createSchedule(@Body() body, @User() user) {
    const userId = user.id;
    const title = body.title;
    const description = body.description;

    const schedule = await this.scheduleService.createSchedule(
      title,
      description,
      userId,
    );

    return schedule;
  }
}
