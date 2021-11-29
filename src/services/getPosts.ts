import { makeRequest } from '../utils/makeRequest';
import { Post } from '../types/post';

export async function getPosts(): Promise<Post[]> {
  const { data: posts }: { data: Post[] } = await makeRequest(
    '/33f613c39922c73acb95',
  );

  return posts;
}
