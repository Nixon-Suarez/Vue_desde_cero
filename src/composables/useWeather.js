import { useWeatherStore } from '../stores/weatherStore';
import { getWeather } from '../helpers/getWeather.js';

export const useWeather = async () => {
  const weatherStore = useWeatherStore();
  const temporatura = await getWeather();
  weatherStore.temperatura = temporatura;
}
