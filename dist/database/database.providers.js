"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const university_entity_1 = require("../university/entities/university.entity");
const user_entity_1 = require("../user/entities/user.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'db',
                port: 5432,
                username: 'hds',
                password: '12345',
                database: 'node_db',
            });
            sequelize.addModels([
                university_entity_1.University,
                user_entity_1.User
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map