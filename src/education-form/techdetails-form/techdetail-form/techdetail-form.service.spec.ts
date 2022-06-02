import { Test, TestingModule } from '@nestjs/testing';
import { TechdetailFormService } from './techdetail-form.service';

describe('TechdetailFormService', () => {
  let service: TechdetailFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechdetailFormService],
    }).compile();

    service = module.get<TechdetailFormService>(TechdetailFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
