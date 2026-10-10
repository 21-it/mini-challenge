import { Test, TestingModule } from '@nestjs/testing';
import { CekbilanganController } from './cekbilangan.controller.js';
import { CekbilanganService } from './cekbilangan.service.js';

describe('CekbilanganController', () => {
  let controller: CekbilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CekbilanganController],
      providers: [CekbilanganService],
    }).compile();

    controller = module.get<CekbilanganController>(CekbilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
