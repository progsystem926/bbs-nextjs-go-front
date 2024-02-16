'use client';

import { Presenter } from './presenter';
import useLogout from './useLogout';

const Header = () => {
  const onClickNewPost = () => {
    const modal = document.getElementById(
      'new_post_modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const { logout } = useLogout();

  return <Presenter onClickNewPost={onClickNewPost} logout={logout} />;
};

export default Header;
