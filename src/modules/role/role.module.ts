import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';
import { ShareModule } from 'src/shared/share.module';
import { RoleController } from './role.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository]), ShareModule],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
