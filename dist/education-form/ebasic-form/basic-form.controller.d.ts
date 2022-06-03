import { Response } from 'express';
import { BasicFormDto } from './basic-form.dto';
import { BasicFormService } from './ebasic-form/basic-form.service';
export declare class BasicFormController {
    private basicFormService;
    constructor(basicFormService: BasicFormService);
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
    create(createFormDto: BasicFormDto, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    update(id: number, createFormDto: BasicFormDto, res: Response): Promise<{
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
