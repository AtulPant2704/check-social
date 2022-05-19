import axios from "axios";

const getSingleUser = async (setUserProfile, username) => {
  try {
    const response = await axios.get(`/api/users/${username}`);
    setUserProfile(response.data.user);
  } catch (error) {
    console.error(error);
  }
};

export { getSingleUser };
