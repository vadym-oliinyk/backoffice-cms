import { makeRequest } from '../utils/makeRequest';
import { FullPost } from '../types/post';

export async function getPost(postId: number): Promise<FullPost> {
  const { data: post }: { data: FullPost } = await makeRequest(
    '/0c31e49c62464b17a1b7',
  );

  return post;
}
