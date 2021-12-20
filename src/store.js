import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {
    blogReducer,
} from './reducers/blogReducer.js';


const reducer = combineReducers({
    getblogReducer : blogReducer,
});

const blogitem = localStorage.getItem("bloginfo")
  ? JSON.parse(localStorage.getItem("bloginfo"))
  : [];

const initialState = {
  Blog: {
    blogData: blogitem,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;