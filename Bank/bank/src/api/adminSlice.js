import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `accounts`,
    }),
  }),
})