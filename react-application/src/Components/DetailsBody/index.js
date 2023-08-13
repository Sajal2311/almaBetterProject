const DetailsBody = (props) => {
  const { selectedElement } = props;
  const { arrayImage, defination } = selectedElement;
  return (
    <>
      <div className="image-container">
        <img src={arrayImage} alt="image_array" className="array-image" />
      </div>
      <div className="details">
        <p>{defination}</p>
      </div>
    </>
  );
};

export default DetailsBody;
