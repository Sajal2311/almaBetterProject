const IndexContainer = (props) => {
  const { formArray, selectedFlashCard, handleIndexButtonClick } = props;
  return formArray.map((item) => (
    <div>
      <button
        className={`index ${selectedFlashCard === item.term ? "selected" : ""}`}
        onClick={() => handleIndexButtonClick(item.term)}
      >
        {item.term}
      </button>
    </div>
  ));
};

export default IndexContainer;
