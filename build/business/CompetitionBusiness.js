"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompetitionDatabase_1 = __importDefault(require("../data/CompetitionDatabase"));
const BaseError_1 = require("../error/BaseError");
const idGenerator_1 = require("../services/idGenerator");
class CompetitionBusiness {
    constructor() {
        this.competitionDatabase = new CompetitionDatabase_1.default;
    }
    ;
    async insertCompetition(body) {
        const competitionDTO = {
            name: body.name,
            status: body.status
        };
        if (!competitionDTO.name || !competitionDTO.status) {
            throw new BaseError_1.BaseError("Preencha todos os campos", 400);
        }
        ;
        const randomId = new idGenerator_1.IdGenerator().generateId();
        const competition = {
            id: randomId,
            name: competitionDTO.name,
            status: competitionDTO.status
        };
        const result = await this.competitionDatabase.insertCompetition(competition);
        return result;
    }
    async updateStatusCompetitionToFinished(competitionId) {
        if (!competitionId) {
            throw new BaseError_1.BaseError("Informe o ID da competição", 400);
        }
        const result = await this.competitionDatabase.updateStatusCompetitionToFinished(competitionId);
        return result;
    }
}
exports.default = CompetitionBusiness;
//# sourceMappingURL=CompetitionBusiness.js.map