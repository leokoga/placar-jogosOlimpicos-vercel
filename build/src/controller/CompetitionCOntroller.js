"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompetitioController {
    constructor(competitionBusiness) {
        this.competitionBusiness = competitionBusiness;
    }
    async insertCompetition(req, res) {
        try {
            await this.competitionBusiness.insertCompetition(req.body);
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
            await this.competitionBusiness.updateStatusCompetitionToFinished(req.params.id);
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