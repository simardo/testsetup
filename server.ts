/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./services/testdb.ts" />

import * as express from "express";
import * as testdb from "./services/testdb";

function main() {
    var app: express.Application = express();

    var test: testdb.Test = new testdb.Test();

    app.use("/app", express.static("web/app"));

    app.get("/testdb", (req: express.Request, res: express.Response) => {
        res.send(test.testConnection());
    });

    app.get("/userlist", (req: express.Request, res: express.Response) => {
        test.getUsers((data: any[]) => res.json(data));
    });

    var server = app.listen(3000, () => {
        var host: string = server.address().address;
        var port: number = server.address().port;

        console.log('test-server listening at http://%s:%s', host, port);
    });
}

main();