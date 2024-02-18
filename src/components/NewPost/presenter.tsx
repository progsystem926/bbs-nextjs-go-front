import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { CreatePost } from '@/types/form';

type Props = {
  handleSubmit: UseFormHandleSubmit<CreatePost>;
  onSubmit: SubmitHandler<CreatePost>;
  register: UseFormRegister<CreatePost>;
  userId: string | undefined;
};

const Presenter = (props: Props) => {
  return (
    <>
      <h1 className='m-3 text-center text-xl'>New Post</h1>
      <form>
        <div className='flex flex-col'>
          <label className='mx-auto w-full max-w-md'>
            <div className='label'>
              <span className='label-text'>Text</span>
            </div>
            <input
              type='hidden'
              defaultValue={props.userId}
              {...props.register('userId', { required: true })}
            />
            <textarea
              placeholder='Type here'
              className='input input-bordered h-36 w-full max-w-md'
              {...props.register('text', { required: true })}
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
