import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCharactersData } from '../types/types';
import { s } from 'vitest/dist/types-5872e574';

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gateway.marvel.com:443/v1/public/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<TCharactersData, string>({
      query: (search = '') => {
        const _apiKey = 'apikey=14f0a7010a2b4ca9b9e6c88156f7d418';
        const _limit = 20;
        const searchByName = search ? `nameStartsWith=${search}&` : '';
        return `/characters?limit=${_limit}&${searchByName}${_apiKey}`;
      },
    }),
    getCharacter: builder.query<TCharactersData, number>({
      query: (id: number) => {
        const _apiKey = 'apikey=14f0a7010a2b4ca9b9e6c88156f7d418';
        return `/characters/${id}?${_apiKey}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = marvelApi;
