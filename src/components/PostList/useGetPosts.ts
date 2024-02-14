'use client';

import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';

import { client } from '@/graphql/client';
import { query } from '@/graphql/document';

export const useGetPosts = () => {
  const [cookies] = useCookies(['_csrf']);
  const requestQuery = async () =>
    client(cookies._csrf as string).request(query);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: requestQuery,
  });

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
