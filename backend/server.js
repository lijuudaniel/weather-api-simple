require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/weather", async (req, res) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const city = "London";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.json({
      message: `Weather in ${city}: ${data.weather[0].description}`
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
