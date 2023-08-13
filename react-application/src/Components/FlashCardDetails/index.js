import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShareSquare,
  FaDownload,
  FaPrint,
  FaFacebookF,
} from "react-icons/fa";
import IndexContainer from "../IndexContainer";
import { useEffect, useState } from "react";
import DetailsBody from "../DetailsBody";
import "./styles/index.css";

const FlashCardDetails = () => {
  const cardDetails = useSelector((state) => state.flashCardReducer); // Picking flash card details from redux
  console.log("flashCardDetails", cardDetails.flashCardDetails);
  const { createGroup, description, formArray } = cardDetails.flashCardDetails;
  const [selectedFlashCard, setSelectedFlashCard] = useState("");
  const [selectedElement, setSelectedElement] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const defaultFlashCard = formArray && formArray[0].term;
    console.log(defaultFlashCard, "defaultFlashCard");
    setSelectedFlashCard(defaultFlashCard);
    setSelectedElement(formArray[0]);
  }, [formArray]);

  const handleIndexButtonClick = (value) => {
    const element = formArray.find((item) => item.term === value);
    setSelectedFlashCard(value);
    setSelectedElement(element);
  };

  const handleShareBtnClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="details-container">
        <div className="header-container">
          <div className="back-button-container">
            <Link to={`/my-flash-card`} className="back-button-link">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="headings">
            <p>{createGroup}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="section-container">
          <div className="white-container content-container">
            {formArray && (
              <IndexContainer
                formArray={formArray}
                selectedFlashCard={selectedFlashCard}
                handleIndexButtonClick={handleIndexButtonClick}
              />
            )}
          </div>
          <div className="white-container detail-body-container">
            {selectedElement && (
              <DetailsBody selectedElement={selectedElement} />
            )}
          </div>
          <div className="action-container">
            <div className="white-container">
              <span onClick={handleShareBtnClick}>
                <FaShareSquare />
                Share
              </span>
            </div>
            <div className="white-container">
              <span>
                <FaDownload />
                Download
              </span>
            </div>
            <div className="white-container">
              <span>
                <FaPrint />
                Print
              </span>
            </div>
          </div>
        </div>
        {showModal && (
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlashCardDetails;
