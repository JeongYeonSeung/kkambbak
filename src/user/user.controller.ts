import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

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
    const display_name = body?.display_name;
    const password = body?.password;

    return this.userService.register(username, display_name, password);
  }
}
