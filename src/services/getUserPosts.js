import axios from "axios";

const getUserPosts = async (setUserPosts, username, setLoader) => {
  try {
    setLoader(true);
    const response = await axios.get(`/api/posts/user/${username}`);
    setUserPosts(response.data.posts);
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
};

export { getUserPosts };
