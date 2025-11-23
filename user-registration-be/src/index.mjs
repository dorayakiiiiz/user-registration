import express from 'express'
import cors from 'cors'

import { configDotenv } from 'dotenv'
configDotenv();
import mongoose from 'mongoose';

import route from './routes/index.mjs';

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://23120197-user-registration-fe.vercel.app'
];

const corsOptions = {
    origin: allowedOrigins, 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.options(/.*/, cors(corsOptions));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const dbConnnect = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connect to database successfully');
    } catch (err) {
        console.log(`Error while connecting to database: ${err}`);
    }
}
dbConnnect();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

route(app);

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

export default app;