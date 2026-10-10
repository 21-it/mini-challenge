import { Controller, Get, Param } from '@nestjs/common';
import { CekbilanganService } from './cekbilangan.service.js';
import { dot } from 'node:test/reporters';

@Controller('bilangan')
export class CekbilanganController {
  constructor(private readonly cekbilanganService: CekbilanganService) {}

  @Get(':angka')
  cekBilangan(@Param('angka') angkaParam: string) {
    return this.cekbilanganService.cekBilangan(angkaParam);
  }
}
