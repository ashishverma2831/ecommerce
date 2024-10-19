import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/users',
  }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user, // Assuming the API returns a result with a user field
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          // Dispatch actions to set the user data and authentication state
          console.log("Data: ", data);
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  }),
});


export const { useGetMeQuery } = userApi;