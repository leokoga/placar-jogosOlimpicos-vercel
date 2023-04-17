"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const idGenerator_1 = require("./../services/idGenerator");
const Competition_1 = require("./../model/Competition");
const ResultDatabase_1 = __importDefault(require("../data/ResultDatabase"));
const BaseError_1 = require("../error/BaseError");
const CompetitionDatabase_1 = __importDefault(require("../data/CompetitionDatabase"));
class ResultBusiness {
    constructor() {
        this.addResult = async (input) => {
            try {
                const resultDatabase = new ResultDatabase_1.default();
                const competitioDatabase = new CompetitionDatabase_1.default();
                const { competition, athlete, value, metric } = input;
                if (!input.competition || !input.athlete || !input.value || !input.metric) {
                    throw new BaseError_1.BaseError("Prencha todos os campos", 400);
                }
                const competitionList = await competitioDatabase.findCompetition(competition);
                if (competitionList.length < 1) {
                    throw new BaseError_1.BaseError("Ainda não exite competição", 404);
                }
                const status = competitionList[0].status;
                if (status === Competition_1.STATUS.FINISHED) {
                    throw new BaseError_1.BaseError("A competição esta encerrada", 403);
                }
                const competitionResultsInputDTO = {
                    competition: competitionList[0].id,
                    athlete: input.athlete,
                    value: input.value,
                    metric: input.metric
                };
                const randomId = new idGenerator_1.IdGenerator().generateId();
                const competitionResults = {
                    id: randomId,
                    competition: competitionResultsInputDTO.competition,
                    athlete: competitionResultsInputDTO.athlete,
                    value: competitionResultsInputDTO.value,
                    metric: competitionResultsInputDTO.metric,
                };
                const result = await resultDatabase.addResult(competitionResults);
                return result;
            }
            catch (error) {
                throw new BaseError_1.BaseError(error.statusCode, error.message);
            }
        };
        this.getAllResultsByCompetitionId = async (competitionId) => {
            const resultDatabase = new ResultDatabase_1.default();
            if (!competitionId) {
                throw new BaseError_1.BaseError("Informe o id da competição", 400);
            }
            ;
            const result = await resultDatabase.getAllResultByCompetitionId(competitionId);
            return result;
        };
    }
}
exports.default = ResultBusiness;
//# sourceMappingURL=ResultBusiness.js.map