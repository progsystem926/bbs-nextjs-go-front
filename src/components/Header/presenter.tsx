type Props = {
  onClickNewPost: () => void;
  logout: () => void;
};

export const Presenter = (props: Props) => {
  return (
    <header className='navbar bg-green-500 '>
      <div className='flex-1'>
        <a href='/postList' className='btn btn-ghost text-xl'>
          BBS
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a onClick={props.onClickNewPost}>New Post</a>
          </li>
          <li>
            <a onClick={props.logout}>Logout</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
