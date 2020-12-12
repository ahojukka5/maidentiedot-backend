import express from 'express';
import cors from 'cors';
import weatherRouter from './controllers/weather';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3003;

app.use('/api/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
