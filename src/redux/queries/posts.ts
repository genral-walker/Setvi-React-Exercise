import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostAPIData, PostType, UpdatePayloadType } from 'models';

export const PostsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['updatePost'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({
      query: () => ({ url: '/posts' }),
    }),
    getSinglePost: builder.query<PostType, string>({
      query: (id) => ({ url: `/posts/${id}` }),
      providesTags: ['updatePost'],
    }),
    createPost: builder.mutation<{ id: string }, PostAPIData>({
      query: (data) => ({
        url: '/posts',
        data: { ...data },
        method: 'POST',
      }),
    }),
    updatePost: builder.mutation<PostType, UpdatePayloadType>({
      query: (data) => ({
        url: `/posts/${data.id}`,
        data: { ...data },
        method: 'PUT',
      }),
      invalidatesTags: ['updatePost'],
    }),
    deletePost: builder.mutation<{}, string>({
      query: (id) => ({
        url: `/posts/${id}`,
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
