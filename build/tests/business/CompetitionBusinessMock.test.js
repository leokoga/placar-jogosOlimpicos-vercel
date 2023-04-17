"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompetitionBusiness_1 = __importDefault(require("../../src/business/CompetitionBusiness"));
const Competition_1 = require("../../src/model/Competition");
const IdGeneratorMocks_1 = require("../mocks/IdGeneratorMocks");
const CompetitionDatabase_1 = __importDefault(require("../../src/data/CompetitionDatabase"));
const BaseError_1 = require("../../src/error/BaseError");
const competitionBusiness = new CompetitionBusiness_1.default(new CompetitionDatabase_1.default(), new IdGeneratorMocks_1.IdGeneratorMock());
describe("", () => {
    test("Erro quando o nome não é inserido", async () => {
        expect.assertions(3);
        try {
            await competitionBusiness.insertCompetition(Competition_1.STATUS.INPROGRESS);
        }
        catch (error) {
            expect(error).toBeInstanceOf(BaseError_1.BaseError);
            expect(error.code).toBe(400);
            expect(error.message).toBe("Preencha todos os campos");
        }
        ;
    });
    test("Erro quando o status não é inserido", async () => {
        expect.assertions(3);
        try {
            await competitionBusiness.insertCompetition("name");
        }
        catch (error) {
            expect(error).toBeInstanceOf(BaseError_1.BaseError);
            expect(error.code).toBe(400);
            expect(error.message).toBe("Preencha todos os campos");
        }
        ;
    });
    test("Erro quando o ID da competição nao é inserido", async () => {
        expect.assertions(3);
        try {
            await competitionBusiness.updateStatusCompetitionToFinished("");
        }
        catch (error) {
            expect(error).toBeInstanceOf(BaseError_1.BaseError);
            expect(error.code).toBe(400);
            expect(error.message).toBe("Informe o ID da competição");
        }
        ;
    });
});
//# sourceMappingURL=CompetitionBusinessMock.test.js.map