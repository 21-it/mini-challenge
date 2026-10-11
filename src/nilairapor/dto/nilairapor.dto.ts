import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class NilaiRaporDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Tugas minimal berisi 1 nilai' })
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(100, { each: true })
  tugas: number[];

  @IsNumber()
  @Min(0)
  @Max(100)
  uts: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  uas: number;
}
