import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechdetailsFormEntity } from '../techdetail.entity';

@Injectable()
export class TechdetailFormService {
    constructor(@InjectRepository(TechdetailsFormEntity) private formRepository: Repository<TechdetailsFormEntity>) { }
    findAll() {
        // get all forms data
        return this.formRepository.find({})
    }
    findOne(id: number): Promise<TechdetailsFormEntity> {
        return this.formRepository.findOne(id)
    }
    create(form: TechdetailsFormEntity): Promise<TechdetailsFormEntity> {
        return this.formRepository.save(form)
    }
    async update(id: number, form: TechdetailsFormEntity) {
        await this.formRepository.update(id, form)
    }
    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}
