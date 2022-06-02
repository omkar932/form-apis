import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicFormEntity } from '../basic-form.entity';

@Injectable()
export class BasicFormService {
    constructor(@InjectRepository(BasicFormEntity) private formRepository: Repository<BasicFormEntity>) { }
    findAll() {
        // get all forms data
        return this.formRepository.find({})
    }
    findOne(id: number): Promise<BasicFormEntity> {
        return this.formRepository.findOne(id)
    }
    create(form: BasicFormEntity): Promise<BasicFormEntity> {
        return this.formRepository.save(form)
    }
    async update(id: number, form: BasicFormEntity) {
        await this.formRepository.update(id, form)
    }
    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}

