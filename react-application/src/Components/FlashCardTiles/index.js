import FlashCard from "../FlashCard";

const FlashCardTile = (props) => {
  const { flashCardlist } = props;
  console.log("flashCardlist", flashCardlist);
  return flashCardlist.map((item, index) => (
    <FlashCard element={item} design={index < 3 ? "" : "normal"} />
  ));
};

export default FlashCardTile;
