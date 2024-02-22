import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

import { SignUp } from '@/types/form';

type Props = {
  handleSubmit: UseFormHandleSubmit<SignUp>;
  onSubmit: SubmitHandler<SignUp>;
  register: UseFormRegister<SignUp>;
  watch: UseFormWatch<SignUp>;
  errors: FieldErrors<SignUp>;
};

const Presenter = (props: Props) => {
  const { errors } = props;
  const password = props.watch('password');

  const nameErrorMessage = errors.name && '※Name is required';
  const emailErrorMessage =
    errors.email &&
    (errors.email.type === 'required'
      ? '※Email is required'
      : errors.email.type === 'pattern'
        ? '※Email is not the correct pattern'
        : '');

  const passwordErrorMessage = errors.password && '※Password is required';
  const passwordConfirmErrorMessage =
    errors.passwordConfirm &&
    (errors.passwordConfirm.type === 'required'
      ? '※Password confirm is required'
      : errors.passwordConfirm.type === 'validate'
        ? errors.passwordConfirm.message
        : '');

  return (
    <>
      <h1 className='m-3 text-center text-xl'>Sign up</h1>
      <form>
        <div className='flex flex-col'>
          <div className='mx-auto text-error'>
            {nameErrorMessage && <span>{nameErrorMessage}</span>}
          </div>
          <div className='mx-auto text-error'>
            {emailErrorMessage && <span>{emailErrorMessage}</span>}
          </div>
          <div className='mx-auto text-error'>
            {passwordErrorMessage && <span>{passwordErrorMessage}</span>}
          </div>
          <div className='mx-auto text-error'>
            {passwordConfirmErrorMessage && (
              <span>{passwordConfirmErrorMessage}</span>
            )}
          </div>
          <label className='mx-auto w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Name</span>
            </div>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              {...props.register('name', { required: true })}
            />
          </label>
          <label className='mx-auto my-3 w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Type here'
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
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              {...props.register('password', { required: true })}
            />
          </label>
          <label className='mx-auto my-3 w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Password confirm</span>
            </div>
            <input
              type='password'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              {...props.register('passwordConfirm', {
                required: true,
                validate: (value) =>
                  value === password || 'The passwords do not match',
              })}
            />
          </label>
          <button
            type='submit'
            className='btn btn-primary mx-auto my-3'
            onClick={props.handleSubmit(props.onSubmit)}
          >
            Enter
          </button>
        </div>
      </form>
    </>
  );
};

export default Presenter;
