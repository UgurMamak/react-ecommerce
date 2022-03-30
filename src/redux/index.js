import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//reducer list
import ExampleReducer from "./example/reducers";

const rootReducer = combineReducers({
  example: ExampleReducer,
});

const composeEnhancers = composeWithDevTools({});

// const allEnhancers=compose(
//    composeWithDevTools(
//        applyMiddleware(
//            promise,thunk,logger
//        )
//    )
// );

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
