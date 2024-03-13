import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @UseGuards(JwtAuthGuard)
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
  async readSchedule(@Param('schedule_id') id) {
    const scheduleId = id;
    const schedule = await this.scheduleService.getSchedule(scheduleId);

    return schedule;
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:schedule_id')
  async updateSchedule(@Param('schedule_id') id, @Body() body) {
    const scheduleId = id;

    const title = body.title;
    const description = body.description;

    const res = await this.scheduleService.modifySchedule(
      scheduleId,
      title,
      description,
    );

    return res;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:schedule_id')
  async deleteSchedule(@Param('schedule_id') id) {
    const scheduleId = id;

    const res = await this.scheduleService.removeSchedule(scheduleId);

    return res;
  }
}
