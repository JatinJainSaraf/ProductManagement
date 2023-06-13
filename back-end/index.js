import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import Mongo from "./db.js";
// Create Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
new Mongo();
import userRoutes from './routes/userRoutes.js';
import userAdminRoute from './routes/userAdminRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import productAdminRoutes from "./routes/productAdminRoutes.js";
app.use('/users', userRoutes);
app.use('/api', productRoutes)
app.use('/admin', userAdminRoute);
app.use('/admin', productAdminRoutes);


app.listen(7002, () => {
  console.log('Server is running on port 7002');
});

