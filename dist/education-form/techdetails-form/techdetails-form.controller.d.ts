import { TechdetailFormService } from './techdetail-form/techdetail-form.service';
import { Response } from 'express';
import { TechdetailsFormEntity } from './techdetail.entity';
export declare class TechdetailsFormController {
    private techFormService;
    constructor(techFormService: TechdetailFormService);
    findAll(res: Response): Promise<string | Response<any, Record<string, any>>>;
    findOne(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
    create(createFormDto: TechdetailsFormEntity, res: Response): Promise<string | Response<any, Record<string, any>>>;
    update(id: number, createFormDto: TechdetailsFormEntity, res: Response): Promise<string | Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<string | Response<any, Record<string, any>>>;
}
