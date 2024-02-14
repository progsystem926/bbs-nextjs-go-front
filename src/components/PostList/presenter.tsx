import { GetPostQueryDocumentQuery } from '@/graphql/generated/graphql';

type Props = {
  data: GetPostQueryDocumentQuery;
};

export const Presenter = (props: Props) => {
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
          {props.data.getPosts.map((post) => (
            <tr key={post.id}>
              <td className='border-r border-base-200'>{post.text}</td>
              <td className='border-r border-base-200'>{post.user.name}</td>
              <td className='border-r border-base-200'>{post.created_at}</td>
              <td>
                <button className='btn btn-outline btn-error'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
