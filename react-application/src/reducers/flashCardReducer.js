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
    case "ADD_DESCRIPTION": {
      const flashCardDetails = action.payload;
      return {
        ...state,
        flashCardDetails,
      };
    }
    default:
      return state;
  }
};

export default flashCardReducer;
