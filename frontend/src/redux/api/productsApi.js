import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api/products` }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => ({
                url: `/`,
                params: {
                    page: params?.page,
                    keyword: params?.keyword,
                    category: params?.category,
                    "price[gte]": params.min,
                    "price[lte]": params.max,
                    "ratings[gte]": params?.ratings,
                }
            }),
        }),
        getProductDetails: builder.query({
            query: (id) => `/${id}`,
        }),
        newReview: builder.mutation({
            query: (reviewData) => ({
                url: `/reviews`,
                method: 'POST',
                body: reviewData
            }),
            invalidatesTags: ['Product']
        }),
        newProduct: builder.mutation({
            query: (productData) => ({
                url: `/admin/products/new`,
                method: 'POST',
                body: productData
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: ({ id, productData }) => ({
                url: `/admin/products/${id}`,
                method: 'PUT',
                body: productData
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/admin/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product']
        }),
        newProductReview: builder.mutation({
            query: ({ reviewData, id }) => ({
                url: `/reviews/${id}`,
                method: 'POST',
                body: reviewData
            }),
            invalidatesTags: ['Product']
        }),
        getAdminProducts: builder.query({
            query: () => `/admin/products`,
        }),
        deleteReview: builder.mutation({
            query: ({ id, productId }) => ({
                url: `/reviews/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product']
        }),
        updateReview: builder.mutation({
            query: ({ id, reviewData, productId }) => ({
                url: `/reviews/${id}`,
                method: 'PUT',
                body: reviewData
            }),
            invalidatesTags: ['Product']
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useNewReviewMutation,
    useNewProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useNewProductReviewMutation,
    useGetAdminProductsQuery,
    useDeleteReviewMutation,
    useUpdateReviewMutation
} = productsApi