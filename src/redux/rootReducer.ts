import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "../components/todo/slice/todoSlice";
import { visibilityFilterReducer } from "../components/visibilityFilter/visibilityFilterSlice";

export const rootReducer = combineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityFilterReducer,
});

