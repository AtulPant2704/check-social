import axios from "axios";

const getSlicedPosts = async (
  pageNumber,
  setSlicedPosts,
  setPostsLoader,
  setPageEnd,
  posts
) => {
  try {
    setPostsLoader(true);
    const response = await axios.get(`/api/posts/${pageNumber}`);
    if (response.data.posts.length === posts.length) {
      setPageEnd(true);
    }
    setSlicedPosts(response.data.posts);
  } catch (error) {
    console.error(error);
  } finally {
    setPostsLoader(false);
  }
};

export { getSlicedPosts };
