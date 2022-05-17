const saveAvatarToCloudinary = async (avatar, setUserData) => {
  try {
    const data = new FormData();
    data.append("file", avatar);
    data.append("upload_preset", "tn3ynknq");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/check-social/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setUserData((prev) => ({ ...prev, avatarUrl: json.url }));
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

export { saveAvatarToCloudinary };
