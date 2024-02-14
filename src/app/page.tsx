import NewPostModal from '@/components/NewPostModal/NewPostModal';
import { PostList } from '@/components/PostList';

export default function Home() {
  return (
    <>
      <main>
        <PostList />
        <NewPostModal />
      </main>
    </>
  );
}
