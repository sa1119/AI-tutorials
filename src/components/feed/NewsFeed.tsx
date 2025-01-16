import { CreatePost } from './CreatePost';
import { Post } from './Post';

export function NewsFeed() {
  return (
    <main className="max-w-[550px] space-y-4">
      <CreatePost />
      <Post />
    </main>
  );
}