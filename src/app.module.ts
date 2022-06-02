import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationFormModule } from './education-form/education-form.module';
import { DocumentUploadFormModule } from './document-upload-form/document-upload-form.module';
import { BasicFormModule } from './basic-form/basic-form.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicFormEntity } from './education-form/ebasic-form/basic-form.entity';
import { EducationFormEntity } from './education-form/education-form/education-form.entity';
import { TechdetailsFormEntity } from './education-form/techdetails-form/techdetail.entity';
import { UserBasicFormEntity } from './basic-form/basic-form/userbasic-form.entity';
import { DocumentUploadEntity } from './document-upload-form/document-upload/document-upload.entity';

@Module({
  imports: [EducationFormModule, DocumentUploadFormModule, BasicFormModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'form-api',
      entities: [BasicFormEntity, EducationFormEntity, TechdetailsFormEntity, UserBasicFormEntity, DocumentUploadEntity],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
