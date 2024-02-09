'use client';

import React from 'react';

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <header className='navbar bg-green-500 '>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>BBS</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {isLogin ? (
            <>
              <li>
                <a>New Post</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a>Sign up</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
