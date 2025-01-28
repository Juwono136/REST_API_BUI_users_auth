import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";
// import helmet from 'helmet';

import userRoutes from './routes/users.js';
import swaggerSpec from './utils/swagger.js';

import { errorHandler } from './middleware/errorMiddleware.js';
import { sanitizeInput } from './middleware/sanitizeMiddleware.js';

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

app.use(cors(corsOptions))
app.use(cookieParser())

// app.use(
//     helmet({
//         hsts: process.env.NODE_ENV === 'production', // Enable HSTS only in production
//     })
// );

// Ensure trust for reverse proxies (e.g., Nginx or cloud hosting)
app.set('trust proxy', true);

app.use(sanitizeInput);

app.use("/api/user", userRoutes)

// api documentation
app.use("/users/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
        res.redirect(process.env.CLIENT_URL);
    });
} else {
    app.get('/', (req, res) => res.send('Backend is running. Please access the front-end.'));
}

app.use(errorHandler)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME;

mongoose.set("strictQuery", true)

mongoose.connect(CONNECTION_URL, { dbName: DB_NAME })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));