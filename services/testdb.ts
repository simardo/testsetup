/// <reference path="../typings/mongodb/mongodb.d.ts" />
/// <reference path='../typings/node/node.d.ts' />

import * as Mongo from "mongodb";

export class Test {
    private static DB_URL: string = "mongodb://localhost:27017/test";
    private database: Mongo.Db;
    
    constructor() {
        Mongo.MongoClient.connect(Test.DB_URL, (err: Error, db: Mongo.Db) => {
            console.log("Connected correctly to server");
            this.database = db;
        });
    }
    
    public close(): void {
        this.database.close();
    }

    public testConnection(): string {
        //.collectionNames()
        return this.database != null ? "succes" : "fail";
    }

    public getUsers(res: (res: any[]) => void): void {
        var result: any = [];
        var collection: Mongo.Collection = this.database.collection('userlist');
        collection.find({}).toArray((e: Error, data: any[]) => {
            result = data;
            console.log(data);
            res(data);
        });
        console.log("r" + result);
        //return result;
    }
}