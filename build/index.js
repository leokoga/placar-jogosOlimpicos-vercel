"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CompetitionCOntroller_1 = __importDefault(require("./controller/CompetitionCOntroller"));
const ResultController_1 = __importDefault(require("./controller/ResultController"));
const competittionController = new CompetitionCOntroller_1.default();
const resultController = new ResultController_1.default();
app_1.default.post("/register/competition", competittionController.insertCompetition);
app_1.default.post("/competition/result", resultController.addResult);
app_1.default.put("/update/competitions/:id", competittionController.updateStatusCompetitionToFinished);
app_1.default.get("/results/competition/:id", resultController.getAllResultsByCompetitionId);
//# sourceMappingURL=index.js.map