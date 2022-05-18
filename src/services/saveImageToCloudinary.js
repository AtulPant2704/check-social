const saveImageToCloudinary = async (image, setterFunc) => {
  try {
    const data = new FormData();
    data.append("file", image);
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
        setterFunc((prev) => ({ ...prev, avatarUrl: json.url }));
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

export { saveImageToCloudinary };
