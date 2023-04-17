"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResultBusiness_1 = __importDefault(require("../../src/business/ResultBusiness"));
const BaseError_1 = require("../../src/error/BaseError");
const resultBusiness = new ResultBusiness_1.default();
describe("Testes result", () => {
    test("Erro quando o id não é inserido", async () => {
        expect.assertions(3);
        try {
            await resultBusiness.getAllResultsByCompetitionId("");
        }
        catch (error) {
            expect(error).toBeInstanceOf(BaseError_1.BaseError);
            expect(error.code).toBe(400);
            expect(error.message).toBe("Informe o id da competição");
        }
    });
});
//# sourceMappingURL=ResultsBusinessMock.test.js.map