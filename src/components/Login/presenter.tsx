import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { Login } from '@/types/form';

type Props = {
  handleSubmit: UseFormHandleSubmit<Login>;
  onSubmit: SubmitHandler<Login>;
  register: UseFormRegister<Login>;
  errors: FieldErrors<Login>;
};

export const Presenter = (props: Props) => {
  return (
    <>
      <h1 className='m-3 text-center text-xl'>Login</h1>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className='flex flex-col'>
          <div className='mx-auto text-error'>
            {props.errors.email && <span>※Email is required</span>}
            <br />
            {props.errors.password && <span>※Password is required</span>}
          </div>
          <label className='mx-auto w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Email'
              className='input input-bordered w-full max-w-xs'
              {...props.register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
          </label>
          <label className='mx-auto my-3 w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Password</span>
            </div>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs'
              {...props.register('password', { required: true })}
            />
          </label>
          <button type='submit' className='btn btn-primary mx-auto my-3'>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
