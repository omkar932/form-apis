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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadEntity = void 0;
const typeorm_1 = require("typeorm");
let DocumentUploadEntity = class DocumentUploadEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DocumentUploadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocumentUploadEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocumentUploadEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocumentUploadEntity.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentUploadEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentUploadEntity.prototype, "updated_at", void 0);
DocumentUploadEntity = __decorate([
    (0, typeorm_1.Entity)()
], DocumentUploadEntity);
exports.DocumentUploadEntity = DocumentUploadEntity;
//# sourceMappingURL=document-upload.entity.js.map