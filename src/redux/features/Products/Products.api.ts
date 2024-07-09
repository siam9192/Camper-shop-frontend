import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(query)=>({
                url:`/products${query}`,
                method:"GET"
            })
        }),
        getRecommendedProducts:builder.query({
            query:(query)=>({
                url:`/products/recommended`,
                method:"GET"
            })
        })
    })
      
})


export const {useGetProductsQuery,useGetRecommendedProductsQuery} = productApi