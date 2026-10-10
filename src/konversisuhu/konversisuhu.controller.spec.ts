import { Test, TestingModule } from '@nestjs/testing';
import { KonversisuhuController } from './konversisuhu.controller.js';
import { KonversisuhuService } from './konversisuhu.service.js';

describe('KonversisuhuController', () => {
  let controller: KonversisuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonversisuhuController],
      providers: [KonversisuhuService],
    }).compile();

    controller = module.get<KonversisuhuController>(KonversisuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
