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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        const result = await this.userRepository.findAll();
        console.log('getAll: ', result);
        return result;
    }
    async findOne(id) {
        const result = await this.userRepository.findByPk(id);
        if (!result)
            return null;
        console.log('findAll: ', result);
        return result;
    }
    async create(createUserInput) {
        const newUser = Object.assign(Object.assign({}, createUserInput), { id: (0, uuid_1.v4)(), status: true, createdAt: new Date(), updatedAt: new Date() });
        const result = await this.userRepository.create(newUser);
        console.log('createee: ', result);
        return result;
    }
    async update(id, updateUserInput) {
        const userEdit = Object.assign(Object.assign({}, updateUserInput), { updateAt: new Date() });
        const result1 = await this.userRepository.update(userEdit, {
            where: {
                id: id
            }
        });
        if (!result1 || !result1[0])
            return null;
        console.log('updateee: ', result1);
        const result2 = await this.userRepository.findByPk(id);
        if (!result2)
            return null;
        console.log('findOne: ', result2);
        return result2;
    }
    async remove(id) {
        const result1 = await this.userRepository.findByPk(id);
        if (!result1)
            return null;
        console.log('findOne: ', result1);
        const result2 = await this.userRepository.destroy({
            where: {
                id
            }
        });
        console.log('deleteee: ', result2);
        if (!result2)
            return null;
        return result1;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map