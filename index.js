import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { getWeather } from "./weather.js"

const app = express();
app.use(cors());

app.get('/weather/:country', async (req, res) => {
    const country = req.params.country
    const data = await getWeather(country)
    console.log("data in index.js: ", data)
    res.json(data);
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}/weather/`),
);