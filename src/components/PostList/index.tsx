'use client';

import { useRouter } from 'next/navigation';

import { Presenter } from '@/components/PostList/presenter';

import { useDeletePost } from './useDeletePost';
import { useGetPosts } from './useGetPosts';

const PostList = () => {
  const { isLoading, isError, data, error } = useGetPosts();
  const { mutation } = useDeletePost();
  const router = useRouter();

  const onClickDelete = async (id: number) => {
    mutation.mutate(id);
  };

  if (isError) {
    console.error('Error: useGetPosts', error);
    router.push('/login');
  }

  return (
    <Presenter
      data={data}
      isLoading={isLoading}
      onClickDelete={onClickDelete}
      isPending={mutation.isPending}
    />
  );
};

export default PostList;
