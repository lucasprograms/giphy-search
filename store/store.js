import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => {
  return createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;