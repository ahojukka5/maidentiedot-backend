import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const accessKey = '66fc4921f8cfa66fdbdbb69478498de0';
  const city = 'Helsinki';
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
