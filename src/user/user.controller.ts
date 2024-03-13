import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*@Get('main')
  async getMainPage() {
    return this.userService.getMainPage();
  }*/

  @Post('register')
  async register(@Body() body) {
    const username = body?.username;
    const displayName = body?.displayName;
    const password = body?.password;

    return this.userService.register(username, displayName, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  async getUserInfo() {
    return 'user-info Page';
  }
}
