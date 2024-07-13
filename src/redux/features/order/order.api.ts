import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (payload: any) => ({
        url: `/orders`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;
