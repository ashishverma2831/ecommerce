// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setIsAuthenticated, setUser } from "../features/userSlice";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/users' }),
//   endpoints: (builder) => ({
//     getMe: builder.query({
//       query: () => `/me`,
//       transformResponse: (result) => result.user,
//       async onQueryStarted(args, { dispatch, queryFulfilled }) {
//         try {
//           const data = await queryFulfilled;
//           dispatch(setUser(data));
//           dispatch(setIsAuthenticated(true));
//         } catch (error) {
//           console.log("error:"+error);
//         }
//       },
//     }),
//   }),
// });

// export const { useGetMeQuery } = userApi;