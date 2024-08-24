"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.universityProvider = void 0;
const university_entity_1 = require("./university.entity");
exports.universityProvider = [
    {
        provide: 'UNIVERSITY_REPOSITORY',
        useValue: university_entity_1.University,
    },
];
//# sourceMappingURL=university.provider.js.map