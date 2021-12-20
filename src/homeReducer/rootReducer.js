const intialState = {
  movieList: {},
  infoList: {},
  loader: false,
  movieName: undefined,
};

export function RootReducer(state = intialState, action) {
  switch (action.type) {
    case "SEARCHED_MOVIE":
      return { ...state, movieName: action.payload };
    case "SAVE_LIST":
      return { ...state, movieList: action.payload };
    case "INFO_MOVIE":
      return { ...state, infoList: action.payload };
    case "LOADER":
      return { ...state, loader: action.payload };
    default:
      return { ...state };
  }
}
