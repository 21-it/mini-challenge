import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CekbilanganModule } from './cekbilangan/cekbilangan.module.js';
import { KonversisuhuModule } from './konversisuhu/konversisuhu.module.js';
import { GeneratorderetbilanganModule } from './generatorderetbilangan/generatorderetbilangan.module.js';
import { NilairaporModule } from './nilairapor/nilairapor.module.js';
import { KasirtokoModule } from './kasirtoko/kasirtoko.module.js';

@Module({
  imports: [CekbilanganModule, KonversisuhuModule, GeneratorderetbilanganModule, NilairaporModule, KasirtokoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
