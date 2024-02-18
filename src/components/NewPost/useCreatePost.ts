'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

import { client } from '@/graphql/client';
import { createPost } from '@/graphql/document';

import { CreatePost } from '@/types/form';

export const useCreatePost = () => {
  const router = useRouter();
  const [cookies] = useCookies(['_csrf']);
  const requestQuery = async (input: CreatePost) => {
    client(cookies._csrf).request(createPost, {
      userId: input.userId,
      text: input.text,
    });
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: requestQuery,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      router.push('/');
    },
    onError: (error, variables) =>
      console.error(`error: ${error} variables: ${variables}`),
  });

  return { mutation };
};
