'use client';

import { Presenter } from '@/components/PostList/presenter';

import { useGetPosts } from './useGetPosts';

export const PostList = () => {
  const { isLoading, isError, data, error } = useGetPosts();

  if (isLoading) <span>Loading...</span>;
  if (isError) {
    console.error('Error: useGetPosts', error);
  }

  console.log(data);

  return <>{data && <Presenter data={data} />}</>;
};
