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
exports.UniversityResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const university_service_1 = require("./university.service");
const university_entity_1 = require("./entities/university.entity");
const create_university_input_1 = require("./dto/create-university.input");
const update_university_input_1 = require("./dto/update-university.input");
let UniversityResolver = class UniversityResolver {
    constructor(universityService) {
        this.universityService = universityService;
    }
    findAll() {
        return this.universityService.findAll();
    }
    findOne(id) {
        return this.universityService.findOne(id);
    }
    createUniversity(createUniversityInput) {
        return this.universityService.create(createUniversityInput);
    }
    updateUniversity(id, updateUniversityInput) {
        return this.universityService.update(id, updateUniversityInput);
    }
    removeUniversity(id) {
        return this.universityService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [university_entity_1.University], { name: 'Universities', description: 'Devuelve una lista de universidades.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniversityResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => university_entity_1.University, { nullable: true, name: 'UniversityById', description: 'Retorna una universidad según el id consultado.' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UniversityResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => university_entity_1.University, { name: 'CreateUniversity', description: 'permite la creación de una universidad.' }),
    __param(0, (0, graphql_1.Args)('createUniversityInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_university_input_1.CreateUniversityInput]),
    __metadata("design:returntype", void 0)
], UniversityResolver.prototype, "createUniversity", null);
__decorate([
    (0, graphql_1.Mutation)(() => university_entity_1.University, { name: 'UpdateUniversity', description: 'Permite la mutación de univerdidad por id' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('updateUniversityInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_university_input_1.UpdateUniversityInput]),
    __metadata("design:returntype", void 0)
], UniversityResolver.prototype, "updateUniversity", null);
__decorate([
    (0, graphql_1.Mutation)(() => university_entity_1.University, { nullable: true, name: 'removeUniversity', description: 'Permite eliminar una universidad por id.' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UniversityResolver.prototype, "removeUniversity", null);
UniversityResolver = __decorate([
    (0, graphql_1.Resolver)(() => university_entity_1.University),
    __metadata("design:paramtypes", [university_service_1.UniversityService])
], UniversityResolver);
exports.UniversityResolver = UniversityResolver;
//# sourceMappingURL=university.resolver.js.map