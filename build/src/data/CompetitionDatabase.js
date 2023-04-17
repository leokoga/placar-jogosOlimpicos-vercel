"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("../error/BaseError");
const BaseDatabase_1 = require("./BaseDatabase");
const constants_1 = require("./constants");
class CompetitionDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertCompetition = async (competition) => {
            const result = await BaseDatabase_1.BaseDatabase.connection(constants_1.competitionsTableName)
                .insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            });
            return result;
        };
        this.findCompetition = async (name) => {
            try {
                const result = await CompetitionDatabase.connection(constants_1.competitionsTableName)
                    .select()
                    .where("name", name);
                return result;
            }
            catch (error) {
                throw new BaseError_1.BaseError("Erro", 400);
            }
        };
        this.updateStatusCompetitionToFinished = async (competitionId) => {
            const result = await BaseDatabase_1.BaseDatabase.connection(constants_1.competitionsTableName)
                .update({ "status": "finished" })
                .where({ id: competitionId });
            return result;
        };
    }
}
exports.default = CompetitionDatabase;
;
//# sourceMappingURL=CompetitionDatabase.js.map