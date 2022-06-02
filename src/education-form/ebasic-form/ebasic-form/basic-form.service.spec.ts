import { Test, TestingModule } from '@nestjs/testing';
import { BasicFormService } from './basic-form.service';

describe('BasicFormService', () => {
  let service: BasicFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicFormService],
    }).compile();

    service = module.get<BasicFormService>(BasicFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
