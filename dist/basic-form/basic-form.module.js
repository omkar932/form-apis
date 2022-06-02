"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const basic_form_controller_1 = require("./basic-form/basic-form.controller");
const basic_form_service_1 = require("./basic-form/basic-form/basic-form.service");
const userbasic_form_entity_1 = require("./basic-form/userbasic-form.entity");
let BasicFormModule = class BasicFormModule {
};
BasicFormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([userbasic_form_entity_1.UserBasicFormEntity])
        ],
        controllers: [basic_form_controller_1.BasicFormController],
        providers: [basic_form_service_1.BasicFormService]
    })
], BasicFormModule);
exports.BasicFormModule = BasicFormModule;
//# sourceMappingURL=basic-form.module.js.map