import { EducationFormService } from './education-form/education-form.service';
import { Response } from 'express';
import { EducationFormDto } from './education-form.dto';
export declare class EducationFormController {
    private eduFormService;
    constructor(eduFormService: EducationFormService);
    findAll(res: Response): Promise<string | Response<any, Record<string, any>>>;
    findOne(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
    create(createFormDto: EducationFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    update(id: number, createFormDto: EducationFormDto, res: Response): Promise<string | Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
}
