'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

import { useUserState } from '@/atoms/userAtom';

const useLogout = () => {
  const [cookies] = useCookies(['_csrf']);
  const router = useRouter();
  const { setUser } = useUserState();
  const logout = useCallback(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      headers: {
        'X-CSRF-TOKEN': cookies._csrf,
      },
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
      .then(() => {
        setUser(null);
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        router.push('/');
      });
  }, [cookies._csrf, router, setUser]);

  return { logout };
};

export default useLogout;
