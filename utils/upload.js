function ShowImageUploadWidget(setImgUrl) {
  window.cloudinary
    .createUploadWidget(
      {
        cloudName: "nefejames",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImgUrl(result.info.thumbnail_url);
        }

        if (error) {
          console.log(error);
        }
      }
    )
    .open();
}

export default ShowImageUploadWidget;
