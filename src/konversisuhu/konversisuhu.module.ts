import { Module } from '@nestjs/common';
import { KonversisuhuService } from './konversisuhu.service.js';
import { KonversisuhuController } from './konversisuhu.controller.js';

@Module({
  controllers: [KonversisuhuController],
  providers: [KonversisuhuService],
})
export class KonversisuhuModule {}
