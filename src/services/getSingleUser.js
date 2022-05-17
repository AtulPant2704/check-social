import axios from "axios";

const getSingleUser = async (setUserProfile, username, setLoader) => {
  try {
    setLoader(true);
    const response = await axios.get(`/api/users/${username}`);
    setUserProfile(response.data.user);
  } catch (error) {
    console.error(error);
  }
};

export { getSingleUser };
