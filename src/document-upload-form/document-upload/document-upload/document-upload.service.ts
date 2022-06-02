import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentUploadEntity } from '../document-upload.entity';

@Injectable()
export class DocumentUploadService {
    constructor(@InjectRepository(DocumentUploadEntity) private formRepository: Repository<DocumentUploadEntity>) { }
    findAll() {
        // get all forms data
        return this.formRepository.find({})
    }
    findOne(id: number): Promise<DocumentUploadEntity> {
        return this.formRepository.findOne(id)
    }
    create(form: DocumentUploadEntity): Promise<DocumentUploadEntity> {
        return this.formRepository.save(form)
    }
    async update(id: number, form: DocumentUploadEntity) {
        await this.formRepository.update(id, form)
    }
    async delete(id: number): Promise<void> {
        await this.formRepository.delete(id)
    }
}
