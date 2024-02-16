'use client';

import { useRouter } from 'next/navigation';

import { Presenter } from '@/components/PostList/presenter';

import { useGetPosts } from './useGetPosts';

export const PostList = () => {
  const { isLoading, isError, data, error } = useGetPosts();
  const router = useRouter();

  if (isLoading) <span>Loading...</span>;
  if (isError) {
    console.error('Error: useGetPosts', error);
    router.push('/login');
  }

  return <Presenter data={data} isLoading={isLoading} />;
};
