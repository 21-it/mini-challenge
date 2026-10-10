import { Test, TestingModule } from '@nestjs/testing';
import { CekbilanganService } from './cekbilangan.service.js';

describe('CekbilanganService', () => {
  let service: CekbilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CekbilanganService],
    }).compile();

    service = module.get<CekbilanganService>(CekbilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
