import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

// redux toolkit meagerly divided in 4 part
// 1. store, 2. reducers, 3. useSelector and 4. useDispatch
// store - know as single source of truth