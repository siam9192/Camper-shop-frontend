import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(query)=>({
                url:`/products${query}`,
                method:"GET"
            })
        }),
        getProduct:builder.query({
            query:(id:string)=>({
                url:`/products/${id}`,
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


export const {useGetProductsQuery,useGetProductQuery,useGetRecommendedProductsQuery} = productApi