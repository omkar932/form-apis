import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { DocumentUploadEntity } from '../document-upload.entity';

@Injectable()
export class DocumentUploadService {
    constructor(@InjectRepository(DocumentUploadEntity) private formRepository: Repository<DocumentUploadEntity>) { }
    findAll(query: PaginateQuery): Promise<Paginated<DocumentUploadEntity>> {
        return paginate(query, this.formRepository, {
          sortableColumns: ['id', 'name', 'file','number'],
          searchableColumns: ['name', 'file', 'number'],
          defaultSortBy: [['id', 'DESC']],
          filterableColumns: {
            number: [FilterOperator.GTE, FilterOperator.LTE],
          },
          maxLimit: 20,
        })
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
