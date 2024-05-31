import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ ...action.payload, saved: false });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    toggleSaveTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.saved = !todo.saved;
      }
    }
  }
});

export const { addTodo, deleteTodo, toggleSaveTodo } = todoSlice.actions;
export default todoSlice.reducer;
