import { Test, TestingModule } from '@nestjs/testing';
import { KasirtokoService } from './kasirtoko.service.js';

describe('KasirtokoService', () => {
  let service: KasirtokoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KasirtokoService],
    }).compile();

    service = module.get<KasirtokoService>(KasirtokoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
