import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./todoReducers";
const reducer = combineReducers({
    Todo: TodoReducer,
});

const initialState = {};

const store = configureStore({ reducer, initialState });

export default store;
