import React, { useState } from "react";
import "./styles/index.css"; // You'll create this CSS file for styling

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  return (
    <>
      <div className="image-uploader">
        <div>
          <label htmlFor="upload-input" className="upload-label">
            <span className="upload-icon">&#8679;</span>
            Upload Image
          </label>
          <input
            type="file"
            id="upload-input"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
      {selectedImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
        </div>
      )}
    </>
  );
};

export default ImageUploader;
