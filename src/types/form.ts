export type Login = {
  email: string;
  password: string;
};

export type CreatePost = {
  userId: number;
  text: string;
};

export type SignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
