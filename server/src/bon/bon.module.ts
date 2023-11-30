import { Module } from '@nestjs/common';
import { BonsService } from './bon.service';
import { BonController } from './bon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonBagage } from './entities/bon.entity';
import { User } from 'src/user/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([BonBagage,User])],
  controllers: [BonController],
  providers: [BonsService],
  exports: [BonsService],
})
export class BonModule {}
