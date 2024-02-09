const Page = () => {
  return (
    <>
      <h1 className='m-3 text-center text-xl'>Sign up</h1>
      <form>
        <div className='flex flex-col'>
          <label className='mx-auto w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Name</span>
            </div>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
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
            />
          </label>
          <button type='submit' className='btn btn-primary mx-auto my-3'>
            Enter
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
