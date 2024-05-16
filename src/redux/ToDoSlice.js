import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [],
    filterText: "",
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state.tasks) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    setFilterText(state, action) {
      state.filterText = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask, toggleCompleted, setFilterText } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
