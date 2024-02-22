'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';

import { useUserState } from '@/atoms/userAtom';
import { useSetCsrf } from '@/hooks/useSetCsrf';
import { SignUp } from '@/types/form';

export const useSignUp = () => {
  const { setUser } = useUserState();
  const { setCsrf } = useSetCsrf();
  const router = useRouter();
  const params = useMemo(() => new URLSearchParams(), []);
  const [cookies, setUseCookies] = useCookies(['_csrf']);

  useEffect(() => {
    setUseCookies('_csrf', cookies._csrf);
  }, [cookies._csrf, setUseCookies]);

  const signUp = useCallback(
    async (Inputs: SignUp) => {
      await setCsrf();

      params.append('name', Inputs.name);
      params.append('email', Inputs.email);
      params.append('password', Inputs.password);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
        headers: {
          'X-CSRF-TOKEN': cookies._csrf,
        },
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: params,
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          router.push('/posts');
        })
        .catch((error) => {
          console.error('Error:', error);
          setUser(null);
          router.push('/signup');
        });
    },
    [cookies._csrf, params, router, setCsrf, setUser]
  );

  return { signUp };
};
