import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducer list
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

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
