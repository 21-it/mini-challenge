import { Test, TestingModule } from '@nestjs/testing';
import { KonversisuhuService } from './konversisuhu.service.js';

describe('KonversisuhuService', () => {
  let service: KonversisuhuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonversisuhuService],
    }).compile();

    service = module.get<KonversisuhuService>(KonversisuhuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
