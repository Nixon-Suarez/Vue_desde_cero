import axios from "axios";
let API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&current=temperature_2m&timezone=auto&forecast_days=1";

export async function getWeather() {
  try {
    const response = await axios.get(API_URL);
    const temperature = response.data.current.temperature_2m;
    return temperature;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
