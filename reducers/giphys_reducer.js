import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const initialState = { giphys: [] }

const giphysReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return { giphys: action.giphys }
    default:
      return state;
  }
}

export default giphysReducer;
