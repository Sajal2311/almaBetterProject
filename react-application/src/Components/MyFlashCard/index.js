import { useSelector } from "react-redux";
import FlashCardTile from "../FlashCardTiles";
import "./styles/index.css";
const MyFlashCard = () => {
  const flashCardReducer = useSelector((state) => state.flashCardReducer);
  const flashCardlist = flashCardReducer.flashCardData;
  return (
    <>
      <div className="view-container">
        <div className="flash-card-container">
          {flashCardlist && <FlashCardTile flashCardlist={flashCardlist} />}
        </div>
      </div>
    </>
  );
};

export default MyFlashCard;
