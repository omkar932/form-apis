import { DocumentUploadService } from './document-upload/document-upload.service';
import { Response } from 'express';
import { DocumentUploadDto } from './document-upload.dto';
export declare class DocumentUploadController {
    private basicFormService;
    constructor(basicFormService: DocumentUploadService);
    sendResponse(type: string, res: any): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    findAll(res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    findOne(id: number, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    create(createFormDto: DocumentUploadDto, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    update(id: number, createFormDto: DocumentUploadDto, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    delete(id: number, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
}
