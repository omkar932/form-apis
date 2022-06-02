import { Test, TestingModule } from '@nestjs/testing';
import { TechdetailsFormController } from './techdetails-form.controller';

describe('TechdetailsFormController', () => {
  let controller: TechdetailsFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechdetailsFormController],
    }).compile();

    controller = module.get<TechdetailsFormController>(TechdetailsFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
