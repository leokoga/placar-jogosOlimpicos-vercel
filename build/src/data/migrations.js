"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TableDatabase_1 = __importDefault(require("./TableDatabase"));
const printError = (error) => {
    console.log(error.sqlMessage || error.message);
};
const start = async () => {
    try {
        new TableDatabase_1.default().createTables();
    }
    catch (error) {
        printError(error);
    }
};
start();
//# sourceMappingURL=migrations.js.map