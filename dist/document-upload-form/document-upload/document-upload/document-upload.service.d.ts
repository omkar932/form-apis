import { Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { DocumentUploadEntity } from '../document-upload.entity';
export declare class DocumentUploadService {
    private formRepository;
    constructor(formRepository: Repository<DocumentUploadEntity>);
    findAll(query: PaginateQuery): Promise<Paginated<DocumentUploadEntity>>;
    findOne(id: number): Promise<DocumentUploadEntity>;
    create(form: DocumentUploadEntity): Promise<DocumentUploadEntity>;
    update(id: number, form: DocumentUploadEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
