import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'bon_bagage' })
export class BonBagage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ville: string;

  @Column()
  date: string;

  @Column()
  telephoneClient: string;

  @Column()
  destinataire: string;

  @Column()
  telephoneDestinataire: string;

  @Column()
  expediteur: string;

  @Column()
  cin: string;

  @Column()
  nbrColis: number;

  @Column()
  genreColis: string;

  @Column()
  poids: string;

  @Column()
  prix: number;

  @Column({type: "bigint"})
  numBon: number;

  @ManyToOne(() => User, (user) => user.bons)
  user: User;
}
