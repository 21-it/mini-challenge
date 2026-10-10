import { Body, Controller, HttpCode, Param, Post, Query } from '@nestjs/common';
import { KasirtokoService } from './kasirtoko.service.js';

@Controller('kasir')
export class KasirtokoController {
  constructor(private readonly kasirtokoService: KasirtokoService) {}
}
