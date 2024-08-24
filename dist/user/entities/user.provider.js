"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const user_entity_1 = require("./user.entity");
exports.userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.provider.js.map