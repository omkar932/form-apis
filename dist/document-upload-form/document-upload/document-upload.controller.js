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
exports.DocumentUploadController = void 0;
const common_1 = require("@nestjs/common");
const document_upload_service_1 = require("./document-upload/document-upload.service");
const document_upload_dto_1 = require("./document-upload.dto");
let DocumentUploadController = class DocumentUploadController {
    constructor(basicFormService) {
        this.basicFormService = basicFormService;
    }
    async findAll(res) {
        try {
            const response = await this.basicFormService.findAll();
            if (response) {
                return res.status(common_1.HttpStatus.OK).json({ playload: response });
            }
            else {
                throw Error('data not fetch from document-upload-form');
            }
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
    async findOne(id, res) {
        try {
            const response = await this.basicFormService.findOne(id);
            if (response) {
                return res.status(common_1.HttpStatus.OK).json({ playload: response });
            }
            else {
                throw Error('data not fetch from document-upload-form');
            }
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
    async create(createFormDto, res) {
        try {
            const response = await this.basicFormService.create(createFormDto);
            if (response) {
                return res.status(common_1.HttpStatus.OK).json({ playload: response });
            }
            else {
                throw Error('can not create data from document-upload-form');
            }
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
    async update(id, createFormDto, res) {
        try {
            const response = await this.basicFormService.update(id, createFormDto);
            return res.status(common_1.HttpStatus.OK).json({ payload: response });
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
    async delete(id, res) {
        try {
            const response = await this.basicFormService.delete(id);
            return res.status(common_1.HttpStatus.OK).json({ payload: response });
        }
        catch (error) {
            return `${error} there is some network error`;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_upload_dto_1.DocumentUploadDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, document_upload_dto_1.DocumentUploadDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "delete", null);
DocumentUploadController = __decorate([
    (0, common_1.Controller)('document-upload'),
    __metadata("design:paramtypes", [document_upload_service_1.DocumentUploadService])
], DocumentUploadController);
exports.DocumentUploadController = DocumentUploadController;
//# sourceMappingURL=document-upload.controller.js.map