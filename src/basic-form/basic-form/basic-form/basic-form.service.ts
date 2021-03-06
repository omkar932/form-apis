import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBasicFormEntity } from '../userbasic-form.entity';

@Injectable()
export class BasicFormService {
    constructor(@InjectRepository(UserBasicFormEntity) private formRepository: Repository<UserBasicFormEntity>) { }
    findAll() {
        // get all forms data
        return this.formRepository.find({})
    }
    findOne(id: number): Promise<UserBasicFormEntity> {
        return this.formRepository.findOne(id)
    }
    create(form: UserBasicFormEntity): Promise<UserBasicFormEntity> {
        return this.formRepository.save(form)
    }
    async update(id: number, form: UserBasicFormEntity) {
        await this.formRepository.update(id, form)
    }
    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}

