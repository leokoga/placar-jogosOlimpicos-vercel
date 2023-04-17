"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionNotFound = void 0;
const BaseError_1 = require("./BaseError");
class CompetitionNotFound extends BaseError_1.BaseError {
    constructor() {
        super("Esta competição não existe", 404);
    }
}
exports.CompetitionNotFound = CompetitionNotFound;
//# sourceMappingURL=CompetitionNotFound.js.map