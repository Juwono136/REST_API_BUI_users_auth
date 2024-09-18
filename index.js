import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express"

import userRoutes from './routes/users.js';
import swaggerSpec from './utils/swagger.js';

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use(cookieParser())

app.use("/api/user", userRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME;

mongoose.set("strictQuery", true)

mongoose.connect(CONNECTION_URL, { dbName: DB_NAME })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));