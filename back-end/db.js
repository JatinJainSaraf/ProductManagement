import mongoose from "mongoose";
import config from "./config.js";

export default class Mongo {
  constructor() {
    const mongoConfig = config.mongo;
    const { hosts, database, username, password, replicaSet, ssl, authSource, retryWrites, w } = mongoConfig;
    
     this.uri = "mongodb://";
    
    if (username && password) {
      this.uri += `${username}:${password}@`;
    }
    
    this.uri += hosts.join(",");
    this.uri += `/${database}`;
    
    if (replicaSet) {
      this.uri += `?replicaSet=${replicaSet}`;
    }
    
    if (ssl) {
      this.uri += "&ssl=true";
    }
    
    if (authSource) {
      this.uri += `&authSource=${authSource}`;
    }
    
    if (retryWrites) {
      this.uri += "&retryWrites=true";
    }
    
    if (w) {
      this.uri += `&w=${w}`;
    }

    console.log(this.uri);
    mongoose
      .connect(this.uri)
      .then(() => {
        console.info(`Worker ${process.pid} connected to MongoDB`);
      })
      .catch((err) => {
        console.error(`Worker ${process.pid} failed connecting to MongoDB: ${err}`);
      });
  }
}
