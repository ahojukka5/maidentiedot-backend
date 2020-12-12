import express from 'express';
import cors from 'cors';
import weatherRouter from './controllers/weather.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3003;

app.use('/api/weather', weatherRouter);

app.listen(PORT, () => {
  const mode = process.env.NODE_ENV;
  console.log(`Server running on port ${PORT}, mode = ${mode}`);
});
