let listReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_LIST":
      return {...state, results: action.payload};
    default:
      return state;
  }
};

export default listReducer;
