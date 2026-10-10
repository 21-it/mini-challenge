import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorderetbilanganService } from './generatorderetbilangan.service.js';

describe('GeneratorderetbilanganService', () => {
  let service: GeneratorderetbilanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratorderetbilanganService],
    }).compile();

    service = module.get<GeneratorderetbilanganService>(GeneratorderetbilanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
