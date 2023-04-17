"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("./BaseDatabase");
const constants_1 = require("./constants");
const printError = (error) => {
    console.log(error.sqlMessage || error.message);
};
class TableDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.createTables = async () => {
            await BaseDatabase_1.BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${constants_1.competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );
            
            CREATE TABLE IF NOT EXISTS ${constants_1.resultsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                competition VARCHAR(64) NOT NULL,
                athlete VARCHAR(255) NOT NULL,
                value FLOAT NOT NULL,
                metric ENUM('s', 'm'),
                FOREIGN KEY (competition) REFERENCES ${constants_1.competitionsTableName}(id)
            )
        `)
                .then(() => {
                console.log("Tables created sucessfully");
            }).catch(printError);
        };
    }
}
exports.default = TableDatabase;
//# sourceMappingURL=TableDatabase.js.map