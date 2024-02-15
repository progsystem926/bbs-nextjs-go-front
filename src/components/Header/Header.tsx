'use client';

const Header = () => {
  const onClickNewPost = () => {
    const modal = document.getElementById(
      'new_post_modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <header className='navbar bg-green-500 '>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>BBS</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a onClick={onClickNewPost}>New Post</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
