import { Test, TestingModule } from '@nestjs/testing';
import { NilairaporService } from './nilairapor.service.js';

describe('NilairaporService', () => {
  let service: NilairaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NilairaporService],
    }).compile();

    service = module.get<NilairaporService>(NilairaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
