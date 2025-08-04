import axios from 'axios';

const getWeather = async (lat, lon) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
  return { temp: res.data.main.temp, name: res.data.name };
};

export default getWeather;
