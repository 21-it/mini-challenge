import { Controller, Get, Param, Query } from '@nestjs/common';
import { GeneratorderetbilanganService } from './generatorderetbilangan.service.js';

@Controller('deret')
export class GeneratorderetbilanganController {
  constructor(private readonly generatorderetbilanganService: GeneratorderetbilanganService) {}

  @Get(':jenis')
  generateDeret(@Param('jenis') jenis: string, @Query('jumlah') jumlah: string, @Query('urutan') urutan?: string) {
    return this.generatorderetbilanganService.generateDeret(jenis, jumlah, urutan);
  }
}
