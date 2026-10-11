import { Body, Controller, HttpCode, Param, Post, Query } from '@nestjs/common';
import { KasirtokoService } from './kasirtoko.service.js';
import { KasirTokoDto } from './dto/kasirtoko.dto.js';

@Controller('kasir')
export class KasirtokoController {
  constructor(private readonly kasirtokoService: KasirtokoService) {}

  @Post('checkout/:member')
  @HttpCode(200)
  checkout(@Param('member') member: string, @Query('metode') metode: string, @Body() dto: KasirTokoDto) {
    return this.kasirtokoService.checkout(member, metode, dto);
  }
}
