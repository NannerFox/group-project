let reduce = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_MOVIES":
      return {...state, results: action.payload};
    default:
      return state;
  }
};

export default reduce;
