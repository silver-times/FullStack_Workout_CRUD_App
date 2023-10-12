import express from 'express';
import cors from 'cors';
import {KEYS} from '../config/keys';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(KEYS.PORT, () => {
    console.log(`Server running on port ${KEYS.PORT}`);
});
