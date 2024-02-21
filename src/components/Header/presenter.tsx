import Link from 'next/link';

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
                <Link href='/posts'>Posts</Link>
              </li>
              <li>
                <Link href='/posts/new'>New Post</Link>
              </li>
              <li>
                <button onClick={props.logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a>Sign up</a>
              </li>
              <li>
                <Link href='/login'>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
