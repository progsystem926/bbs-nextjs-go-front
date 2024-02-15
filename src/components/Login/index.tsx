'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Login } from '@/types/form';

import { Presenter } from './presenter';
import { useLogin } from './useLogin';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const { login } = useLogin();
  const onSubmit: SubmitHandler<Login> = async (data) => login(data);

  return (
    <>
      <Presenter
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </>
  );
}
