import { client } from './client.js';

export async function getSortedPostsData() {
  const data = await client.get({ endpoint: "portfolio" });
  const allPostsData = data.contents;
  return allPostsData.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  }); 
}

export async function getAllPostIds() {
  const data = await client.get({ endpoint: 'portfolio' });
  return data.contents.map((content) => {
    return {
      params: {
        id: content.id,
      },
    };
  });
}
