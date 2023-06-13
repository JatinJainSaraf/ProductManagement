import dotenv from "dotenv";
dotenv.config();
const config = {
  'mongo': {
    'hosts': [process.env.MONGO_HOSTS],
    'database': process.MONGO_DATABASE,
    'username': process.env.MONGO_USERNAME,
    'password': process.env.MONGO_PASSWORD,
    "debug": false,
    "replicaSet": process.env.MONGO_REPLICA_SET,
    "ssl": true,
    "authSource": "admin",
    "retryWrites": true,
    "w": "majority"
  },
};

export default config;