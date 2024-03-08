import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(username: string, display_name: string, password: string) {
    const exitedUser = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    if (exitedUser) {
      throw new BadRequestException('이미 존재하는 아이디입니다.');
    }

    const hashedPassword = await hash(password, 10);
    const user = await this.userRepository.save({
      username: username,
      display_name: display_name,
      password: hashedPassword,
    });

    return user;
  }
}
