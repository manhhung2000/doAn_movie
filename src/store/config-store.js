import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers/root.reducer";
import thunk from "redux-thunk"; // no changes here 😀

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
