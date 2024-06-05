import express from 'express';
import { Request, Response } from 'express';
import db from './db/cars';

import { Car } from './types/types';

const app = express();

app.use(express.json());

app.get('/api/cars', (req: Request, res: Response) => {
    res.json(db);
});

app.get('/api/cars/:id', (req: Request, res: Response) => {
    const idParam = req.params.id;

    const car = db.cars.find((car: Car) => car.id === idParam);

    if(!car) {
        res.status(404).json({error: 'Not found'});
    } else {
        res.json(car);
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT);

console.log(`Server listening on Port: ${PORT}`);