import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (payload) => ({
        url: `/products`,
        method: 'POST',
      body:payload
      }),
    }),
    updateProduct:builder.mutation({
      query:(payload)=>{
        return {
          url:`/products/${payload.id}`,
          method:"PUT",
          body:payload.data
        }
      },
      invalidatesTags:['Get product']
    }),
    getProducts: builder.query({
      query: (query) => ({
        url: `/products${query}`,
        method: 'GET',
      }),
      providesTags:['Get product']
    }),
    getProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: 'GET',
      })
    }),
    getRecommendedProducts: builder.query({
      query: (query) => ({
        url: `/products/recommended`,
        method: 'GET',
      }),
    }),
    getFeaturedProducts: builder.query({
      query: (query) => ({
        url: `/products/recommended`,
        method: 'GET',
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Get product']
    }),
  }),
  
});

export const {
  useGetProductsQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useGetProductQuery,
  useGetRecommendedProductsQuery,
  useDeleteProductMutation
} = productApi;
