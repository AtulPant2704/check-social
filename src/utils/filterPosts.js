const filterPosts = (posts, filterType) => {
  switch (filterType) {
    case "noFilter":
      return posts;
    case "trending":
      return [...posts].sort((a, b) => {
        const strengthA = a.likes?.likeCount + a.comments?.length;
        const strengthB = b.likes?.likeCount + b.comments?.length;
        return strengthB - strengthA;
      });
    case "oldestByDate":
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "newestByDate":
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    default:
      return posts;
  }
};

export { filterPosts };
