import { configureStore } from "@reduxjs/toolkit";
import {tasksReducer} from"../redux/ToDoSlice"
import { filtersReducer } from "./filtersSlice";
import { loginReducer } from "./LoginSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    login: loginReducer,
  },
});
