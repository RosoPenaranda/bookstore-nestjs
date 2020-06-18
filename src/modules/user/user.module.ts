import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { ShareModule } from '../../shared/share.module';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), ShareModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
