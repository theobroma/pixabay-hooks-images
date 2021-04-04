import axios from 'axios';

export const API_KEY = 'ad86b534a1a14d4891f171701201710';

export const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});
