import { Test, TestingModule } from '@nestjs/testing';
import { BasicFormController } from './basic-form.controller';

describe('BasicFormController', () => {
  let controller: BasicFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicFormController],
    }).compile();

    controller = module.get<BasicFormController>(BasicFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
