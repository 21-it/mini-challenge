import { Module } from '@nestjs/common';
import { NilairaporService } from './nilairapor.service.js';
import { NilairaporController } from './nilairapor.controller.js';

@Module({
  controllers: [NilairaporController],
  providers: [NilairaporService],
})
export class NilairaporModule {}
