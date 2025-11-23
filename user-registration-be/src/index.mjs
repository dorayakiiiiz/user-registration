import express from 'express'
import cors from 'cors'

import { configDotenv } from 'dotenv'
configDotenv();
import mongoose from 'mongoose';

import route from './routes/index.mjs';

const app = express();


const PORT = process.env.PORT;
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

const allowedOrigins = [
    'https://23120197-user-registration-fe.vercel.app' 
]

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Blocked by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))

route(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})