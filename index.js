import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { getWeather } from "./weather.js"

const app = express();
app.use(cors());

app.get('/weather/:country', async (req, res) => {
    const country = req.params.country
    try{
      const data = await getWeather(country)
      console.log("data in index.js: ", data)
      res.status(200).json(data);
    } catch (error) {
      res.status(400).send(error.message);
    }
    
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}/weather/`),
);