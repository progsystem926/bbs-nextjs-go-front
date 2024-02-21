'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

import { client } from '@/graphql/client';
import { deletePost } from '@/graphql/document';

export const useDeletePost = () => {
  const router = useRouter();
  const [cookies] = useCookies(['_csrf']);
  const requestQuery = async (id: number) => {
    await client(cookies._csrf).request(deletePost, {
      id,
    });
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: requestQuery,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      router.refresh();
    },
    onError: (error, variables) =>
      console.error(`error: ${error} variables: ${variables}`),
  });

  return { mutation };
};
