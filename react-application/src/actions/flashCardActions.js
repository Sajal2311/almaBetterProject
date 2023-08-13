const actions = {
  addFlashCard: (formData) => ({
    type: "ADD_FORM_DATA",
    payload: formData,
  }),
  addFlashCardDescription: (element) => ({
    type: "ADD_DESCRIPTION",
    payload: element,
  }),
};

export default actions;
