import http from 'http';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const options = {
    host: 'api.weatherstack.com',
    path: '/current?access_key=66fc4921f8cfa66fdbdbb69478498de0&query=Helsinki',
  };

  const callback = (response) => {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log(str);
      res.send(str);
    });
  };

  http.request(options, callback).end();
});

export default router;
