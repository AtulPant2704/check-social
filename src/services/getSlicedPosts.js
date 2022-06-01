import axios from "axios";

const getSlicedPosts = async (pageNumber, setSlicedPosts, setPostsLoader) => {
  try {
    setPostsLoader(true);
    const response = await axios.get(`/api/posts/${pageNumber}`);
    setSlicedPosts(response.data.posts);
  } catch (error) {
    console.error(error);
  } finally {
    setPostsLoader(false);
  }
};

export { getSlicedPosts };
