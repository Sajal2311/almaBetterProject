import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/index.css";
import actions from "../../actions/flashCardActions";

const FlashCard = (props) => {
  const { element, design } = props;
  const dispatch = useDispatch();
  const { groupImage, createGroup, description, formArray } = element;
  console.log("element", element, design);
  const handleViewDetails = () => {
    dispatch(actions.addFlashCardDescription(element));
  };
  return (
    <div className="flas-card">
      <div className={`card-details`}>
        <div className={`card-header`}>
          <img
            src={groupImage}
            alt={`${createGroup}_group_image`}
            className="group-image image-aside"
          />
          <h3 className="group-title">{createGroup}</h3>
        </div>
        <p className="descriotion">{description}</p>
        <h5>{`${formArray.length} Cards`}</h5>
        <Link
          to={`/my-flash-card/${createGroup}`}
          onClick={handleViewDetails}
          className="view-details-link"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FlashCard;
