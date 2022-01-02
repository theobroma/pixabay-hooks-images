import axios from 'axios';

export const API_KEY = '21006895-bfaaa89652a3d7d5175478097';
export const API_URL = 'https://pixabay.com/api';

export const pixabayAxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});
