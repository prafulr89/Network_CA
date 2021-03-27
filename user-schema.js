"use strict";
/* eslint-disable @typescript-eslint/no-inferrable-types */
// We need to explicitly set the types because `typescript-rest-swager` doesn't do inference
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
exports.ICreateUser = void 0;
const Service_core_1 = require("Service-core");
class ICreateUser {
    constructor() {
        /** Name of the User */
        this.name = '';
        /** Description for the User */
        this.description = undefined;
    }
}
__decorate([
    Service_core_1.IsString(),
    __metadata("design:type", String)
], ICreateUser.prototype, "name", void 0);
__decorate([
    Service_core_1.IsString({ optional: true }),
    __metadata("design:type", String)
], ICreateUser.prototype, "description", void 0);
exports.ICreateUser = ICreateUser;
//# sourceMappingURL=user-schema.js.map