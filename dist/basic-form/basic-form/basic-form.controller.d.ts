import { BasicFormService } from './basic-form/basic-form.service';
import { Response } from 'express';
import { UserBasicFormDto } from './userbasic.dto';
export declare class BasicFormController {
    private basicFormService;
    constructor(basicFormService: BasicFormService);
    findAll(res: Response): Promise<string | Response<any, Record<string, any>>>;
    findOne(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
    create(createFormDto: UserBasicFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    update(id: number, createFormDto: UserBasicFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
}
