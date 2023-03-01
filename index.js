import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import got from 'got';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const BASE_URL = 'http://api.weatherapi.com/v1/current.json'

app.get('/api/weather/:country', async (req, res) => {
  const country = req.params.country

  try{
    const response = await got(BASE_URL, {
      searchParams:{
        key: process.env.KEY,
        q: country,
      }
    }).json()

    const {
          current: { last_updated, temp_c, wind_kph},          
          location: { name },
        } = response

    res.status(200).json({ name, last_updated, temp_c, wind_kph});
  } catch (error) {
    res.status(400).send(error.message);
  }    
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}/api/weather/`),
);