import { useSelector } from "react-redux";

const MyFlashCard = () => {
  const flashCardReducer = useSelector((state) => state.flashCardReducer);
  console.log("data", flashCardReducer.flashCardData);
  return (
    <>
      <h1>FormData</h1>
      <img src={flashCardReducer.flashCardData[0].groupImage} />
    </>
  );
};

export default MyFlashCard;
