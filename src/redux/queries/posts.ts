import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostAPIData, PostType } from 'models';

export const PostsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({
      query: () => ({ url: '/posts' }),
    }),
    getSinglePost: builder.query<PostType[], string>({
      query: (id) => ({ url: `/posts${id}` }),
    }),
    createPost: builder.mutation<{ id: string }, PostAPIData>({
      query: (data) => ({
        url: '/posts',
        data: { ...data },
        method: 'POST',
      }),
    }),
    updatePost: builder.mutation<any, any>({
      query: (data) => ({
        url: `/posts${data.id}`,
        data: { ...data },
        method: 'PUT',
      }),
    }),
    deletePost: builder.mutation<any, any>({
      query: (data) => ({
        url: `/posts${data.id}`,
        data: { ...data },
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = PostsApi;
