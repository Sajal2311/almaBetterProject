import React, { useState } from "react";
import "./styles/index.css"; // You'll create this CSS file for styling

const ImageUploader = (props) => {
  const { name, onImageChange } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    onImageChange(URL.createObjectURL(imageFile)); // Pass the object URL to the parent
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
            id={`${name}-input`}
            accept="image/*"
            onChange={handleImageChange}
            name={name}
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
