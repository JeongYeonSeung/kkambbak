import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { User } from 'src/decorators/user.decorator';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post() // 일정 생성하기
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

  @Get('/:schedule_id') // 특정 일정 페이지 불러오기
  async readSchedule(@Param('id') id) {
    const scheduleId = id;
    const schedule = await this.scheduleService.getSchedule(scheduleId);

    return schedule;
  }
}
