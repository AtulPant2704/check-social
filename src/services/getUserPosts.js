import axios from "axios";

const getUserPosts = async (setUserPosts, username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    setUserPosts(response.data.posts);
  } catch (error) {
    console.error(error);
  }
};

export { getUserPosts };
