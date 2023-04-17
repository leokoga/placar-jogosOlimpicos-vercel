"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CompetitionBusiness_1 = __importDefault(require("./business/CompetitionBusiness"));
const CompetitionCOntroller_1 = __importDefault(require("./controller/CompetitionCOntroller"));
const ResultController_1 = __importDefault(require("./controller/ResultController"));
const CompetitionDatabase_1 = __importDefault(require("./data/CompetitionDatabase"));
const idGenerator_1 = require("./services/idGenerator");
const competitionDatabase = new CompetitionDatabase_1.default();
const competitionBusiness = new CompetitionBusiness_1.default(competitionDatabase, new idGenerator_1.IdGenerator());
const competittionController = new CompetitionCOntroller_1.default(competitionBusiness);
const resultController = new ResultController_1.default();
app_1.default.post("/register/competition", (req, res) => competittionController.insertCompetition(req, res));
app_1.default.post("/competition/result", (req, res) => resultController.addResult(req, res));
app_1.default.put("/update/competitions/:id", (req, res) => competittionController.updateStatusCompetitionToFinished(req, res));
app_1.default.get("/results/competition/:id", (req, res) => resultController.getAllResultsByCompetitionId(req, res));
//# sourceMappingURL=index.js.map