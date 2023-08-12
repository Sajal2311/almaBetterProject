import _ from "lodash";

const flashCardReducer = (state = { flashCardData: [] }, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA": {
      const flashCardData = action.payload;
      const prevFlashCardData = state.flashCardData;
      return {
        ...state,
        flashCardData: [...prevFlashCardData, flashCardData],
      };
    }
    default:
      return state;
  }
};

export default flashCardReducer;
