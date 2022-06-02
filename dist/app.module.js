"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const education_form_module_1 = require("./education-form/education-form.module");
const document_upload_form_module_1 = require("./document-upload-form/document-upload-form.module");
const basic_form_module_1 = require("./basic-form/basic-form.module");
const typeorm_1 = require("@nestjs/typeorm");
const basic_form_entity_1 = require("./education-form/ebasic-form/basic-form.entity");
const education_form_entity_1 = require("./education-form/education-form/education-form.entity");
const techdetail_entity_1 = require("./education-form/techdetails-form/techdetail.entity");
const userbasic_form_entity_1 = require("./basic-form/basic-form/userbasic-form.entity");
const document_upload_entity_1 = require("./document-upload-form/document-upload/document-upload.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [education_form_module_1.EducationFormModule, document_upload_form_module_1.DocumentUploadFormModule, basic_form_module_1.BasicFormModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                database: 'form-api',
                entities: [basic_form_entity_1.BasicFormEntity, education_form_entity_1.EducationFormEntity, techdetail_entity_1.TechdetailsFormEntity, userbasic_form_entity_1.UserBasicFormEntity, document_upload_entity_1.DocumentUploadEntity],
                synchronize: true
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map