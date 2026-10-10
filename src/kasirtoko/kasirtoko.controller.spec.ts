import { Test, TestingModule } from '@nestjs/testing';
import { KasirtokoController } from './kasirtoko.controller.js';
import { KasirtokoService } from './kasirtoko.service.js';

describe('KasirtokoController', () => {
  let controller: KasirtokoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KasirtokoController],
      providers: [KasirtokoService],
    }).compile();

    controller = module.get<KasirtokoController>(KasirtokoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
