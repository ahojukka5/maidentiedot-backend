import express from 'express';
import cors from 'cors';
import weatherRouter from './controllers/weather.js';
import config from './config.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/weather', weatherRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}, mode = ${config.MODE}`);
});
