import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';
import Header from '.';

describe('Header component', () => {
  test.skip('renders BBS title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/BBS/);
    expect(titleElement).toBeInTheDocument();
  });

  test.skip('renders login and sign up links when not logged in', () => {
    const mockSetIsLogin = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([false, mockSetIsLogin]);
    render(<Header />);
    const loginLink = screen.getByText(/Login/);
    const signUpLink = screen.getByText(/Sign up/);
    expect(loginLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  test.skip('renders new post and logout links when logged in', () => {
    const mockSetIsLogin = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([true, mockSetIsLogin]);
    render(<Header />);
    const newPostLink = screen.getByText(/New Post/);
    const logoutLink = screen.getByText(/Logout/);
    expect(newPostLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
