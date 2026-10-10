import { Test, TestingModule } from '@nestjs/testing';
import { NilairaporController } from './nilairapor.controller.js';
import { NilairaporService } from './nilairapor.service.js';

describe('NilairaporController', () => {
  let controller: NilairaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NilairaporController],
      providers: [NilairaporService],
    }).compile();

    controller = module.get<NilairaporController>(NilairaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
