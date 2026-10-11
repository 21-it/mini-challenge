import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsString, Min, ValidateNested } from 'class-validator';

export class ItemDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  harga: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  qty: number;
}

export class KasirTokoDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}
