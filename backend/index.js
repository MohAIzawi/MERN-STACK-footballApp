import express from 'express';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Club } from './models/clubModel.js';
import clubRoutes from './clubRoutes/clubRoutes.js';

const app = express();

app.use(express.json());


app.use(cors())

/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
        credentials: false,
    })
)*/


app.get('/', (request, response) => {
    response.send('welcome to the backend!');
});


app.use('/clubs', clubRoutes);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });