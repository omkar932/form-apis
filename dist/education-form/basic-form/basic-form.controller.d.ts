import { BasicFormService } from './basic-form/basic-form.service';
import { BasicFormEntity } from './basic-form.entity';
export declare class BasicFormController {
    private basicFormService;
    constructor(basicFormService: BasicFormService);
    findAll(res: Response): Promise<string | BasicFormEntity[]>;
    findOne(id: number, res: Response): Promise<BasicFormEntity>;
    create(createFormDto: BasicFormEntity, res: Response): Promise<BasicFormEntity>;
    update(id: number, createFormDto: BasicFormEntity, res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
}
