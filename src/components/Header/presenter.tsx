type Props = {
  onClickNewPost: () => void;
  logout: () => void;
  isLogin: boolean;
};

export const Presenter = (props: Props) => {
  return (
    <header className='navbar bg-green-500 '>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>BBS</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {props.isLogin ? (
            <>
              <li>
                <a href='/posts'>Posts</a>
              </li>
              <li>
                <a href='/posts/new'>New Post</a>
              </li>
              <li>
                <a onClick={props.logout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a>Sign up</a>
              </li>
              <li>
                <a href='/login'>Login</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
