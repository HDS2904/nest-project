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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const sequelize_typescript_1 = require("sequelize-typescript");
const university_entity_1 = require("../../university/entities/university.entity");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { description: 'Identificador del usuario.' }),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Nombre de Usuario.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Profesion del usuario.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "profession", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Edad del usuario.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Id de la universidad asociada.' }),
    (0, sequelize_typescript_1.ForeignKey)(() => university_entity_1.University),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "universityId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Estado del usuario.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Fecha de creación.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Fecha de edición.' }),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => university_entity_1.University),
    __metadata("design:type", university_entity_1.University)
], User.prototype, "university", void 0);
User = __decorate([
    sequelize_typescript_1.Table,
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map