import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ass-4-8llrt8xd9-siam-hasans-projects.vercel.app/api/v1',
  }),
  tagTypes: ['Get product'],
  endpoints: (builder) => ({}),
});
