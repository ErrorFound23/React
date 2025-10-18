import { createSlice, nanoid } from "@reduxjs/toolkit";
// nonoid is a function that generates unique IDs
// slice is a similar to a reducer, it contains the state and the actions or functionality to change the state
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // state => contain current state values or data
    // action => contain some value. 
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // generates a unique ID
        text: action.payload, // action.payload.text
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // overwrite
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? {...todo, text} : todo
      );
    },
  },
});

// state is the current state or data, action is the action that is dispatched

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // export functionality which help to extract individually used in components
export default todoSlice.reducer; // export for store
