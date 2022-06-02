import { Module } from '@nestjs/common';
import { EducationFormController } from './education-form/education-form.controller';
import { TechdetailsFormController } from './techdetails-form/techdetails-form.controller';
import { EducationFormService } from './education-form/education-form/education-form.service';
import { TechdetailFormService } from './techdetails-form/techdetail-form/techdetail-form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicFormEntity } from './ebasic-form/basic-form.entity';
import { BasicFormController } from './ebasic-form/basic-form.controller';
import { BasicFormService } from './ebasic-form/ebasic-form/basic-form.service';
import { EducationFormEntity } from './education-form/education-form.entity';
import { TechdetailsFormEntity } from './techdetails-form/techdetail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BasicFormEntity, EducationFormEntity, TechdetailsFormEntity])
  ],
  controllers: [BasicFormController, EducationFormController, TechdetailsFormController],
  providers: [BasicFormService, EducationFormService, TechdetailFormService]
})
export class EducationFormModule { }
