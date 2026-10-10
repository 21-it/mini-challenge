import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { NilairaporService } from './nilairapor.service.js';

@Controller('nilai')
export class NilairaporController {
  constructor(private readonly nilairaporService: NilairaporService) {}
}
