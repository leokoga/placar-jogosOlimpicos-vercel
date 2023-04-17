"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("./BaseDatabase");
const BaseError_1 = require("../error/BaseError");
const constants_1 = require("./constants");
class ResultDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.addResult = async (result) => {
            try {
                await ResultDatabase.connection(constants_1.resultsTableName)
                    .insert({
                    id: result.id,
                    competition: result.competition,
                    athlete: result.athlete,
                    value: result.value,
                    metric: result.metric
                });
            }
            catch (error) {
                throw new BaseError_1.BaseError("Erro inesperado", 400);
            }
        };
        this.getAllResultByCompetitionId = async (competitionId) => {
            const result = await ResultDatabase.connection(constants_1.resultsTableName)
                .where("competition", competitionId)
                .orderBy("value", "asc");
            return result;
        };
    }
}
exports.default = ResultDatabase;
//# sourceMappingURL=ResultDatabase.js.map