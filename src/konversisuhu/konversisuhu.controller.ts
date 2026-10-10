import { Controller, Get, Query } from '@nestjs/common';
import { KonversisuhuService } from './konversisuhu.service.js';

@Controller('suhu')
export class KonversisuhuController {
  constructor(private readonly konversisuhuService: KonversisuhuService) {}

  @Get('konversi')
  konversi(@Query('nilai') nilai: string, @Query('dari') dari: string, @Query('ke') ke: string) {
    return this.konversisuhuService.konversiSuhu(nilai, dari, ke);
  }
}
