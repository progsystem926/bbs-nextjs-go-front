const NewPostModal = () => {
  return (
    <>
      <dialog id='new_post_modal' className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>New Post</h3>
          <textarea
            className='textarea textarea-bordered mt-4 w-full'
            placeholder='Type here'
          ></textarea>
          <div className='modal-action'>
            <button className='btn btn-primary mr-2'>Enter</button>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NewPostModal;
