import { Test, TestingModule } from '@nestjs/testing';
import { DocumentUploadController } from './document-upload.controller';

describe('DocumentUploadController', () => {
  let controller: DocumentUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentUploadController],
    }).compile();

    controller = module.get<DocumentUploadController>(DocumentUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
