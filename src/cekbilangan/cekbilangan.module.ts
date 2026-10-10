import { Module } from '@nestjs/common';
import { CekbilanganService } from './cekbilangan.service.js';
import { CekbilanganController } from './cekbilangan.controller.js';

@Module({
  controllers: [CekbilanganController],
  providers: [CekbilanganService],
})
export class CekbilanganModule {}
