import { Response } from 'express';
import { BasicFormDto } from './basic-form.dto';
import { BasicFormService } from './ebasic-form/basic-form.service';
export declare class BasicFormController {
    private basicFormService;
    constructor(basicFormService: BasicFormService);
    findAll(res: Response): Promise<string | Response<any, Record<string, any>>>;
    findOne(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
    create(createFormDto: BasicFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    update(id: number, createFormDto: BasicFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
}
