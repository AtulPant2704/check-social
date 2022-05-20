const saveImageToCloudinary = async (
  image,
  callingFunc,
  inputData,
  type,
  from = "profile"
) => {
  try {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tn3ynknq");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      `https://api.cloudinary.com/v1_1/check-social/${type}/upload`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let data;
        if (from === "post") {
          data = { ...inputData, img: json.url };
        } else {
          data = { ...inputData, avatarUrl: json.secure_url };
        }
        callingFunc(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

export { saveImageToCloudinary };
