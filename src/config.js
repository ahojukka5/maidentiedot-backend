import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const MODE = process.env.NODE_ENV;
const WEATHER_API_ACCESS_KEY = process.env.WEATHER_API_ACCESS_KEY;
const PORT = process.env.PORT || 3003;

export default { MODE, PORT, WEATHER_API_ACCESS_KEY };
