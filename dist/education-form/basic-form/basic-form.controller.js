"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFormController = void 0;
const common_1 = require("@nestjs/common");
const basic_form_service_1 = require("./basic-form/basic-form.service");
const common_2 = require("@nestjs/common");
const basic_form_entity_1 = require("./basic-form.entity");
let BasicFormController = class BasicFormController {
    constructor(basicFormService) {
        this.basicFormService = basicFormService;
    }
    async findAll(res) {
        try {
            const response = await this.basicFormService.findAll();
            return response;
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
    async findOne(id, res) {
        const response = await this.basicFormService.findOne(id);
        return response;
    }
    async create(createFormDto, res) {
        const response = await this.basicFormService.create(createFormDto);
        return response;
    }
    async update(id, createFormDto, res) {
        const response = await this.basicFormService.update(id, createFormDto);
        return response;
    }
    async delete(id, res) {
        const response = await this.basicFormService.delete(id);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('get-data'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasicFormController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BasicFormController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('created-data'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [basic_form_entity_1.BasicFormEntity, Object]),
    __metadata("design:returntype", Promise)
], BasicFormController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, basic_form_entity_1.BasicFormEntity, Object]),
    __metadata("design:returntype", Promise)
], BasicFormController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BasicFormController.prototype, "delete", null);
BasicFormController = __decorate([
    (0, common_1.Controller)('basic-form'),
    __metadata("design:paramtypes", [basic_form_service_1.BasicFormService])
], BasicFormController);
exports.BasicFormController = BasicFormController;
//# sourceMappingURL=basic-form.controller.js.map