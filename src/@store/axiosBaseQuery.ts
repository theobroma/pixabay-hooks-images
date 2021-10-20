// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { waitForMe } from '../@utils/waitforme';

export const API_KEY = '21006895-bfaaa89652a3d7d5175478097';
export const API_URL = 'https://pixabay.com/api';

export const pixabayAxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      await waitForMe(1000);
      const result = await pixabayAxiosInstance({
        url: baseUrl + url,
        method,
        data,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
