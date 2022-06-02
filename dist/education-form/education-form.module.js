"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationFormModule = void 0;
const common_1 = require("@nestjs/common");
const education_form_controller_1 = require("./education-form/education-form.controller");
const techdetails_form_controller_1 = require("./techdetails-form/techdetails-form.controller");
const education_form_service_1 = require("./education-form/education-form/education-form.service");
const techdetail_form_service_1 = require("./techdetails-form/techdetail-form/techdetail-form.service");
const typeorm_1 = require("@nestjs/typeorm");
const basic_form_entity_1 = require("./ebasic-form/basic-form.entity");
const basic_form_controller_1 = require("./ebasic-form/basic-form.controller");
const basic_form_service_1 = require("./ebasic-form/ebasic-form/basic-form.service");
const education_form_entity_1 = require("./education-form/education-form.entity");
const techdetail_entity_1 = require("./techdetails-form/techdetail.entity");
let EducationFormModule = class EducationFormModule {
};
EducationFormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([basic_form_entity_1.BasicFormEntity, education_form_entity_1.EducationFormEntity, techdetail_entity_1.TechdetailsFormEntity])
        ],
        controllers: [basic_form_controller_1.BasicFormController, education_form_controller_1.EducationFormController, techdetails_form_controller_1.TechdetailsFormController],
        providers: [basic_form_service_1.BasicFormService, education_form_service_1.EducationFormService, techdetail_form_service_1.TechdetailFormService]
    })
], EducationFormModule);
exports.EducationFormModule = EducationFormModule;
//# sourceMappingURL=education-form.module.js.map