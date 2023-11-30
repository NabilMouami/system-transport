import { BonBagage } from 'src/bon/entities/bon.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
  @OneToMany(() => BonBagage, (bon) => bon.user)
  bons: BonBagage[];

}
