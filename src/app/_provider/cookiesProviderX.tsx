'use client';

import { CookiesProvider } from 'react-cookie';

const CookiesProviderX = ({ children }: { children: React.ReactNode }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default CookiesProviderX;
