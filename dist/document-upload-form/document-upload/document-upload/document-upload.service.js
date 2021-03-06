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
exports.DocumentUploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
const typeorm_2 = require("typeorm");
const document_upload_entity_1 = require("../document-upload.entity");
let DocumentUploadService = class DocumentUploadService {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.formRepository, {
            sortableColumns: ['id', 'name', 'file', 'number'],
            searchableColumns: ['name', 'file', 'number'],
            defaultSortBy: [['id', 'DESC']],
            filterableColumns: {
                number: [nestjs_paginate_1.FilterOperator.GTE, nestjs_paginate_1.FilterOperator.LTE],
            },
            maxLimit: 20,
        });
    }
    findOne(id) {
        return this.formRepository.findOne(id);
    }
    create(form) {
        return this.formRepository.save(form);
    }
    async update(id, form) {
        await this.formRepository.update(id, form);
    }
    async delete(id) {
        await this.formRepository.delete(id);
    }
};
DocumentUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_upload_entity_1.DocumentUploadEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocumentUploadService);
exports.DocumentUploadService = DocumentUploadService;
//# sourceMappingURL=document-upload.service.js.map