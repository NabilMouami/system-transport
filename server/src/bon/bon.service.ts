import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BonBagage } from 'src/bon/entities/bon.entity';
import { CreateBonDto } from './dto/create-bon.dto';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class BonsService {
    constructor(
        @InjectRepository(BonBagage) private bonRepository: Repository<BonBagage>,
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {}
    
      findBons() {
        return this.bonRepository.find({});
      }
    async  create(id: number,createBonDto: CreateBonDto){
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
        throw new HttpException(
          'User not found. Cannot create Profile',
          HttpStatus.BAD_REQUEST,
        );
  
         return this.bonRepository.save({...createBonDto,user});
      }
      updateBon(id: number, updateBonDetails: CreateBonDto) {
        return this.bonRepository.update({ id }, { ...updateBonDetails });
      }
  remove(id: number) {
    return this.bonRepository.delete(id);
  }
}