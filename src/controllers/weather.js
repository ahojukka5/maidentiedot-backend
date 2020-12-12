import axios from 'axios';
import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/', (req, res) => {
  const accessKey = config.WEATHER_API_ACCESS_KEY;
  const city = req.query.city;
  const uri = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}`;

  axios
    .get(uri)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
