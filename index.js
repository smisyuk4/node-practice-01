import express from 'express';
import { getWeather } from "./weather.js"

const app = express();
const PORT = 3560

app.get('/weather/:country', async (req, res) => {
    const country = req.params.country
    const data = await getWeather(country)
    res.json(data);
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);