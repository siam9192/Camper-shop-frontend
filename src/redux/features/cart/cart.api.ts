import { baseApi } from '../../api/baseApi';

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCartProducts: builder.query({
      query: (payload: string[]) => ({
        url: `/products/my-cart`,
        method: 'POST',
        body: payload,
      }),
    })
  }),
 
});

export const { useGetCartProductsQuery } = cartApi;
