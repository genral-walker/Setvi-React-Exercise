import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostType } from 'models';

export const PostsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({
      query: () => ({ url: `/posts` }),
    }),
    // registerPatient: builder.mutation<RegisterPatientReturn, RegisterPatient>({
    //   query: (data) => ({
    //     url: '/users',
    //     data: { ...data },
    //     method: 'POST',
    //   }),
    // }),
    // verifyPatient: builder.mutation<{ message: string }, string>({
    //   query: (email) => ({
    //     url: '/users/verify',
    //     data: { email },
    //     method: 'POST',
    //   }),
    // })
  }),
});

export const { useGetAllPostsQuery } = PostsApi;
