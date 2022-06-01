import axios from "axios";

const getPosts = async (pageNumber, setPosts, setPostsLoader) => {
  try {
    setPostsLoader(true);
    const response = await axios.get(`/api/posts/${pageNumber}`);
    setPosts(response.data.posts);
  } catch (error) {
    console.error(error);
  } finally {
    setPostsLoader(false);
  }
};

export { getPosts };
