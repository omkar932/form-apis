import { BasicFormService } from './basic-form/basic-form.service';
import { Response } from 'express';
import { UserBasicFormDto } from './userbasic.dto';
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
    create(createFormDto: UserBasicFormDto, res: Response): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
    update(id: number, createFormDto: UserBasicFormDto, res: Response): Promise<{
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
