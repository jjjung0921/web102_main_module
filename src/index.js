import React from "react";

function isImageFile(file) {
  if (typeof file !== 'string') {
    return false;
  }
  return file.toLowerCase().endsWith(".png");
}

function Box({ image, text }) {  // props 객체에서 image와 text를 구조 분해
  if (image && text) {
    if (isImageFile(image) && typeof text === "string") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            alignItems: "center",
            lineHeight: "30px"
          }}
        >
          <img src={image} alt="logo" style={{ width: "40px" }} />
          <div>{text}</div>
        </div>
      );
    } else {
      console.error("Invalid image or text format");
      return null;
    }
  } else {
    console.error("Missing image or text");
    return null;
  }
}

export default Box;