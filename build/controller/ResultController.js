"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResultBusiness_1 = __importDefault(require("../business/ResultBusiness"));
class ResultController {
    async addResult(req, res) {
        try {
            const resultBusiness = new ResultBusiness_1.default();
            await resultBusiness.addResult(req.body);
            res.status(201).send("Sucesso");
        }
        catch (error) {
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
            ;
        }
        ;
    }
    ;
    async getAllResultsByCompetitionId(req, res) {
        try {
            const competitionId = req.params.id;
            const result = await new ResultBusiness_1.default().getAllResultsByCompetitionId(competitionId);
            res.status(200).send(result);
        }
        catch (error) {
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
            ;
        }
        ;
    }
    ;
}
exports.default = ResultController;
//# sourceMappingURL=ResultController.js.map