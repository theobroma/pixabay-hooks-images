import axios from 'axios';

export const API_KEY = '21006895-bfaaa89652a3d7d5175478097';

export const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});
