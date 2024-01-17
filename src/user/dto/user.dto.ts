import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsOptional()
  cards: number[];

  @IsOptional()
  deck: number[];
}
