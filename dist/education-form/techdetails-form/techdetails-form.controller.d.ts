import { TechdetailFormService } from './techdetail-form/techdetail-form.service';
import { Response } from 'express';
import { TechdetailsFormEntity } from './techdetail.entity';
export declare class TechdetailsFormController {
    private techFormService;
    constructor(techFormService: TechdetailFormService);
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
    create(createFormDto: TechdetailsFormEntity, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    update(id: number, createFormDto: TechdetailsFormEntity, res: Response): Promise<{
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
