import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EducationFormEntity } from '../education-form.entity';

@Injectable()
export class EducationFormService {
    constructor(@InjectRepository(EducationFormEntity) private formRepository: Repository<EducationFormEntity>) { }
    findAll() {
        // get all forms data
        return this.formRepository.find({})
    }
    findOne(id: number): Promise<EducationFormEntity> {
        return this.formRepository.findOne(id)
    }
    create(form: EducationFormEntity): Promise<EducationFormEntity> {
        return this.formRepository.save(form)
    }
    async update(id: number, form: EducationFormEntity) {
        await this.formRepository.update(id, form)
    }
    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}
