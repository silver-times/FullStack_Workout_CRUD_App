import express from 'express';
import cors from 'cors';
import {KEYS} from '../config/keys';
import {client} from '../config/database';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
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
