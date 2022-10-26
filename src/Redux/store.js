import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./App/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer=combineReducers({
    appReducer,
    authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

console.log(store.getState(),"initial store")