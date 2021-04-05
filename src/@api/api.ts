import axios from 'axios';

export const API_KEY = '18692705-ed4727d48f1212ef902c664a7';

export const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});
