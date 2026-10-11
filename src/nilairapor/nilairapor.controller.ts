import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { NilairaporService } from './nilairapor.service.js';
import { NilaiRaporDto } from './dto/nilairapor.dto.js';

@Controller('nilai')
export class NilairaporController {
  constructor(private readonly nilairaporService: NilairaporService) {}

  @Post('hitung')
  @HttpCode(200)
  hitungNilai(@Body() dto: NilaiRaporDto) {
    return this.nilairaporService.hitungNilai(dto);
  }
}
