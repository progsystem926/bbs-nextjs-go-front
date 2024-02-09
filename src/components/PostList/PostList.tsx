const PostList = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th className='w-7/12 border-r border-base-200'>Post</th>
            <th className='w-2/12 border-r border-base-200'>Name</th>
            <th className='w-2/12 border-r border-base-200'>Datetime</th>
            <th className='w-1/12'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border-r border-base-200'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
            <td className='border-r border-base-200'>Cy Ganderton</td>
            <td className='border-r border-base-200'>2024/01/01 01:01:01</td>
            <td>
              <button className='btn btn-outline btn-error'>Delete</button>
            </td>
          </tr>
          <tr>
            <td className='border-r border-base-200'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
            <td className='border-r border-base-200'>Cy Ganderton</td>
            <td className='border-r border-base-200'>2024/01/01 01:01:01</td>
            <td>
              <button className='btn btn-outline btn-error'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
