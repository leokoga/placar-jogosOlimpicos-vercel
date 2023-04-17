"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompetitionBusiness_1 = __importDefault(require("../business/CompetitionBusiness"));
class CompetitioController {
    async insertCompetition(req, res) {
        try {
            await new CompetitionBusiness_1.default().insertCompetition(req.body);
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
    async updateStatusCompetitionToFinished(req, res) {
        try {
            await new CompetitionBusiness_1.default().updateStatusCompetitionToFinished(req.params.id);
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
}
exports.default = CompetitioController;
;
//# sourceMappingURL=CompetitionCOntroller.js.map