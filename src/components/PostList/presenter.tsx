import { GetPostQueryDocumentQuery } from '@/graphql/generated/graphql';
import { formatDateTime } from '@/utils/dateTime';

type Props = {
  data: GetPostQueryDocumentQuery | undefined;
  isLoading: boolean;
  onClickDelete: (id: number) => Promise<void>;
  isPending: boolean;
};

export const Presenter = (props: Props) => {
  return (
    <>
      {props.data ? (
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
                  <td className='border-r border-base-200'>
                    {formatDateTime(post.created_at)}
                  </td>
                  <td>
                    <button
                      className='btn btn-outline btn-error'
                      onClick={() => props.onClickDelete(parseInt(post.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : props.isLoading ? (
        <div className='flex h-screen items-center justify-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      ) : props.isPending ? (
        <div className='flex h-screen items-center justify-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
