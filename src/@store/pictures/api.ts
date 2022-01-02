import { createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../@api/api';
import { axiosBaseQuery } from '../axiosBaseQuery';

// Define a service using a base URL and expected endpoints
export const picturesApi = createApi({
  reducerPath: 'picturesApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPictures: builder.query<any, number>({
      // query: (page) => ({ url: '/', method: 'get' }),
      query: (page) => ({
        url: `/?page=${page}`,
        // params: {
        //   key: API_KEY,
        //   image_type: 'photo',
        //   orientation: 'horizontal',
        //   per_page: 12,
        //   page,
        // },
        method: 'get',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPicturesQuery } = picturesApi;
