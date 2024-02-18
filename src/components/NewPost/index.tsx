'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useUserState } from '@/atoms/userAtom';
import { CreatePost } from '@/types/form';

import Presenter from './presenter';
import { useCreatePost } from './useCreatePost';

const NewPost = () => {
  const { user } = useUserState();
  const { mutation } = useCreatePost();
  const { register, handleSubmit } = useForm<CreatePost>();
  const onSubmit: SubmitHandler<CreatePost> = async (data) =>
    mutation.mutate(data);

  return (
    <Presenter
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      userId={user?.userId}
    />
  );
};

export default NewPost;
