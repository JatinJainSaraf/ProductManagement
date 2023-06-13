import mongoose from "mongoose";
import config from "./config.js";
export default class Mongo {
    constructor() {
        this.uri = config['mongo']['uri'];
        mongoose.connect(
                this.uri
            )
            .then(
                () => {
                    console.info(`Worker ${process.pid} connected to Mongo Database`);
                },
                err => {
                    console.error(`Worker ${process.pid} failed connecting to Mongo Database: ${err}`);
                }
            );
    }
}
