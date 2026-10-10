import { Test, TestingModule } from '@nestjs/testing';
import { GeneratorderetbilanganController } from './generatorderetbilangan.controller.js';
import { GeneratorderetbilanganService } from './generatorderetbilangan.service.js';

describe('GeneratorderetbilanganController', () => {
  let controller: GeneratorderetbilanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratorderetbilanganController],
      providers: [GeneratorderetbilanganService],
    }).compile();

    controller = module.get<GeneratorderetbilanganController>(GeneratorderetbilanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
