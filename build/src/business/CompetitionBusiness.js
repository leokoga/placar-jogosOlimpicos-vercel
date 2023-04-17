"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("../error/BaseError");
class CompetitionBusiness {
    constructor(competitionDatabase, idGenerator) {
        this.competitionDatabase = competitionDatabase;
        this.idGenerator = idGenerator;
    }
    async insertCompetition(body) {
        const competitionDTO = {
            name: body.name,
            status: body.status
        };
        if (!competitionDTO.name || !competitionDTO.status) {
            throw new BaseError_1.BaseError("Preencha todos os campos", 400);
        }
        ;
        const randomId = this.idGenerator.generateId;
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