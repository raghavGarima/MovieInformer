import axios from "axios";

export const getMovieList = (searchValue) => {
  return async (dispatch) => {
    console.log(searchValue, dispatch, process.env.REACT_APP_API_KEY);

    dispatch({
      type: "LOADER",
      payload: true,
    });

    dispatch({
      type: "SEARCHED_MOVIE",
      payload: searchValue,
    });
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=f7cc51b4`)
      .then((res) => {
        dispatch({
          type: "SAVE_LIST",
          payload: res.data.Search,
        });

        dispatch({
          type: "LOADER",
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMovieDetailById = (MovieId, history) => {
  return async (dispatch) => {
    console.log(MovieId);

    dispatch({
      type: "LOADER",
      payload: true,
    });
    axios
      .get(`http://www.omdbapi.com/?i=${MovieId}&apikey=f7cc51b4`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "INFO_MOVIE",
          payload: res.data,
        });

        dispatch({
          type: "LOADER",
          payload: false,
        });
        // window.localStorage.setItem("MovieId", MovieId);
        history.push(`/movieInfo/${MovieId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
