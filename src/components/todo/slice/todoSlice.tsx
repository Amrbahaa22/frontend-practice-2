import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodo } from "../../../types/data";
import { v4 as uuidv4 } from 'uuid';

const initialState: TTodo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const item = {
                id: uuidv4(),
                text: action.payload,
                completed: false,
            };
            state = [...state, item];
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state[index] = { ...state[index], completed: !state[index].completed };
            }
        },
    }
})
export const { addTodo, toggleTodo } = todoSlice.actions;

export const todoReducer =  todoSlice.reducer;