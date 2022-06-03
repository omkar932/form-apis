export declare class SendResService {
    sendResponse(req: any, res: any): Promise<{
        status: number;
        data: any;
        msg?: undefined;
    } | {
        status: number;
        msg: any;
        data?: undefined;
    }>;
}
