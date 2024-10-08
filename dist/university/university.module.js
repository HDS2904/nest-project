"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityModule = void 0;
const common_1 = require("@nestjs/common");
const university_service_1 = require("./university.service");
const university_resolver_1 = require("./university.resolver");
const database_module_1 = require("../database/database.module");
const university_provider_1 = require("./entities/university.provider");
let UniversityModule = class UniversityModule {
};
UniversityModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...university_provider_1.universityProvider,
            university_resolver_1.UniversityResolver,
            university_service_1.UniversityService
        ]
    })
], UniversityModule);
exports.UniversityModule = UniversityModule;
//# sourceMappingURL=university.module.js.map