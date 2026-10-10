import { Module } from '@nestjs/common';
import { KasirtokoService } from './kasirtoko.service.js';
import { KasirtokoController } from './kasirtoko.controller.js';

@Module({
  controllers: [KasirtokoController],
  providers: [KasirtokoService],
})
export class KasirtokoModule {}
