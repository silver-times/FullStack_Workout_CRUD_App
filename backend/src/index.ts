import express from 'express';
import cors from 'cors';
import {KEYS} from '../config/keys';
import {client} from '../config/database';
import {PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await prisma.workout.findMany();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

app.get('/api/workouts/:id', async (req, res) => {
    try {
        const {id} = req.params;

        if(!id || isNaN(Number(id))) {
            return res.status(400).json({error: 'ID must be a valid number'});
        }

        const workout = await prisma.workout.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.json(workout);
    }
    catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post('/api/workouts', async (req, res) => {
    try {
        const {title, reps, load} = req.body;

        if(!title || !reps || !load) {
            return res.status(400).json({error: 'Please fill all fields'});
        }
        const workout = await prisma.workout.create({
            data: {
                title,
                reps,
                load
            }
        });
        res.json(workout);
    }
    catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

app.put('/api/workouts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {title, reps, load} = req.body;

        if(!id || isNaN(Number(id))) {
            return res.status(400).json({error: 'ID must be a valid number'});
        }

        if(!title || !reps || !load) {
            return res.status(400).json({error: 'Please fill all fields'});
        }
        const workout = await prisma.workout.update({
            where: {
                id: Number(id)
            },
            data: {
                title,
                reps,
                load
            }
        });
        res.json(workout);
    }
    catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

app.delete('/api/workouts/:id', async (req, res) => {
    try {
        const {id} = req.params;

        if(!id || isNaN(Number(id))) {
            return res.status(400).json({error: 'ID must be a valid number'});
        }

        const workout = await prisma.workout.delete({
            where: {
                id: Number(id)
            }
        });
        res.json(workout);
    }
    catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
});

app.listen(KEYS.PORT, async () => {
    try {
        await client.connect();
        console.log(`Server running on port ${KEYS.PORT}`);
        console.log(`Database connected`)
    }
    catch (error) {
        console.log(error);
    }
});
