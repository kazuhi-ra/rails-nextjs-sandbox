const getPosts = async (): Promise<{ title: string }[]> => {
  const apiURL = process.env.API_URL ?? "http://server:3001";
  const response = await fetch(`${apiURL}/posts`, {
    cache: "no-cache",
  });
  return await response.json();
};

export const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full flex flex-col py-72 h-screen bg-sky-50">
      <div className="m-auto text-4xl font-bold text-center text-sky-900">
        Hello, world!
      </div>
      {posts.map((post) => (
        <div
          key={post.title}
          className="m-auto text-4xl font-bold text-center text-sky-900"
        >
          {post.title}
        </div>
      ))}
    </div>
  );
};
