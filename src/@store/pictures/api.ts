import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../../@api/api';
import { axiosBaseQuery } from '../axiosBaseQuery';

interface Pokemon {
  [x: string]: any;
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: API_URL,
  // }),
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, number>({
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
export const { useGetPokemonByNameQuery } = pokemonApi;
