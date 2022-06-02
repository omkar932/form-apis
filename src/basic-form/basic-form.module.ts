import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicFormController } from './basic-form/basic-form.controller';
import { BasicFormService } from './basic-form/basic-form/basic-form.service';
import { UserBasicFormEntity } from './basic-form/userbasic-form.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBasicFormEntity])
  ],
  controllers: [BasicFormController],
  providers: [BasicFormService]
})
export class BasicFormModule { }
