import { Module } from '@nestjs/common';
import { GeneratorderetbilanganService } from './generatorderetbilangan.service.js';
import { GeneratorderetbilanganController } from './generatorderetbilangan.controller.js';

@Module({
  controllers: [GeneratorderetbilanganController],
  providers: [GeneratorderetbilanganService],
})
export class GeneratorderetbilanganModule {}
