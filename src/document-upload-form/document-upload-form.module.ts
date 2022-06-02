import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentUploadController } from './document-upload/document-upload.controller';
import { DocumentUploadEntity } from './document-upload/document-upload.entity';
import { DocumentUploadService } from './document-upload/document-upload/document-upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentUploadEntity])
  ],
  controllers: [DocumentUploadController],
  providers: [DocumentUploadService]
})
export class DocumentUploadFormModule { }
