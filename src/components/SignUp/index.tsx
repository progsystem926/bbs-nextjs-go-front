'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { SignUp } from '@/types/form';

import Presenter from './presenter';
import { useSignUp } from './useSignUp';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUp>();
  const { signUp } = useSignUp();
  const onSubmit: SubmitHandler<SignUp> = async (data) => signUp(data);

  return (
    <Presenter
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      watch={watch}
      errors={errors}
    />
  );
};

export default SignUp;
