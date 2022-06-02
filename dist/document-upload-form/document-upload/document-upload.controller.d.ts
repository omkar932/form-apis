import { DocumentUploadService } from './document-upload/document-upload.service';
import { Response } from 'express';
import { DocumentUploadDto } from './document-upload.dto';
export declare class DocumentUploadController {
    private basicFormService;
    constructor(basicFormService: DocumentUploadService);
    findAll(res: Response): Promise<string | Response<any, Record<string, any>>>;
    findOne(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
    create(createFormDto: DocumentUploadDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    update(id: number, createFormDto: DocumentUploadDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
}
