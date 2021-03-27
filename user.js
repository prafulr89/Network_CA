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
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let User = class User extends typeorm_1.BaseEntity {
    constructor(client) {
        var _a, _b, _c;
        super();
        this.id = uuid_1.v4();
        this.name = '';
        this.description = '';
        this.createDate = new Date();
        this.updateDate = new Date();
        if (client) {
            this.id = (_a = client.id) !== null && _a !== void 0 ? _a : this.id;
            this.name = (_b = client.name) !== null && _b !== void 0 ? _b : this.name;
            this.description = (_c = client.description) !== null && _c !== void 0 ? _c : this.description;
        }
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid', { name: 'id' }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'name', type: 'text' }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'description', type: 'text' }),
    __metadata("design:type", Object)
], User.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'create_date', type: 'timestamptz', update: false }),
    __metadata("design:type", Date)
], User.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'update_date', type: 'timestamptz', update: true }),
    __metadata("design:type", Date)
], User.prototype, "updateDate", void 0);
User = __decorate([
    typeorm_1.Entity({ name: 'users' }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.js.map