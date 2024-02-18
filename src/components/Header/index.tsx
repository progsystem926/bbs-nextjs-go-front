'use client';

import { useEffect, useState } from 'react';

import { useUserState } from '@/atoms/userAtom';

import { Presenter } from './presenter';
import useLogout from './useLogout';

const Header = () => {
  const { user } = useUserState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (user) setIsLogin(true);
    else setIsLogin(false);
  }, [user]);

  const onClickNewPost = () => {
    const modal = document.getElementById(
      'new_post_modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const { logout } = useLogout();

  return (
    <Presenter
      onClickNewPost={onClickNewPost}
      logout={logout}
      isLogin={isLogin}
    />
  );
};

export default Header;
