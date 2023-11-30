import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsInt, IsString } from 'class-validator';

export class CreateBonDto {
  @ApiProperty()
  @IsString()
  ville: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  telephoneClient: string;

  @ApiProperty()
  @IsString()
  destinataire: string;

  @ApiProperty()
  @IsString()
  telephoneDestinataire: string;

  @ApiProperty()
  @IsString()
  expediteur: string;

  @ApiProperty()
  @IsString()
  cin: string;

  @ApiProperty()
  @IsInt()
  nbrColis: number;

  @ApiProperty()
  @IsString()
  genreColis: string;

  @ApiProperty()
  @IsString()
  poids: string;

  @ApiProperty()
  @IsInt()
  prix: number;
  
  @ApiProperty()
  @IsInt()
  numBon: number;
}
