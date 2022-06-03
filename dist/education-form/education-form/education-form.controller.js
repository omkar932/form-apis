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
exports.EducationFormController = void 0;
const common_1 = require("@nestjs/common");
const education_form_service_1 = require("./education-form/education-form.service");
const education_form_dto_1 = require("./education-form.dto");
const error_response_1 = require("../../common/constant/error-response");
let EducationFormController = class EducationFormController {
    constructor(eduFormService) {
        this.eduFormService = eduFormService;
    }
    async sendResponse(type, res) {
        if (type === 'success') {
            return {
                status: 200,
                data: res
            };
        }
        else {
            return {
                status: 404,
                msg: res
            };
        }
    }
    async findAll(res) {
        try {
            const response = await this.eduFormService.findAll();
            if (response) {
                return await this.sendResponse('success', res.send(response));
            }
            return this.sendResponse('error', res.send(response));
        }
        catch (error) {
            throw new common_1.BadRequestException({
                msg: error_response_1.networkError,
                error
            });
        }
    }
    async findOne(id, res) {
        try {
            const response = await this.eduFormService.findOne(id);
            if (response) {
                return await this.sendResponse('success', res.send(response));
            }
            return this.sendResponse('error', res.send(response));
        }
        catch (error) {
            throw new common_1.BadRequestException({
                msg: error_response_1.networkError,
                error
            });
        }
    }
    async create(createFormDto, res) {
        try {
            const response = await this.eduFormService.create(createFormDto);
            if (response) {
                return await this.sendResponse('success', res.send(response));
            }
            return this.sendResponse('error', res.send(response));
        }
        catch (error) {
            throw new common_1.BadRequestException({
                msg: error_response_1.networkError,
                error
            });
        }
    }
    async update(id, createFormDto, res) {
        try {
            const response = this.eduFormService.update(id, createFormDto);
            if (response) {
                return await this.sendResponse('success', res.send(response));
            }
            return this.sendResponse('error', res.send(response));
        }
        catch (error) {
            throw new common_1.BadRequestException({
                msg: error_response_1.networkError,
                error
            });
        }
    }
    async delete(id, res) {
        try {
            const response = this.eduFormService.delete(id);
            if (response) {
                return await this.sendResponse('success', res.send(response));
            }
            return this.sendResponse('error', res.send(response));
        }
        catch (error) {
            throw new common_1.BadRequestException({
                msg: error_response_1.networkError,
                error
            });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EducationFormController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EducationFormController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [education_form_dto_1.EducationFormDto, Object]),
    __metadata("design:returntype", Promise)
], EducationFormController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, education_form_dto_1.EducationFormDto, Object]),
    __metadata("design:returntype", Promise)
], EducationFormController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EducationFormController.prototype, "delete", null);
EducationFormController = __decorate([
    (0, common_1.Controller)('education-form'),
    __metadata("design:paramtypes", [education_form_service_1.EducationFormService])
], EducationFormController);
exports.EducationFormController = EducationFormController;
//# sourceMappingURL=education-form.controller.js.map