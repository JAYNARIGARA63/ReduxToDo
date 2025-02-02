import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state: any, action) => {
      state.push({id: Date.now(), text: action.payload, completed: false});
    },
    toggleTodo: (state, action) => {
      const todo: any = state.find((t: any) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((t: any) => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      const {id, newText} = action.payload;
      const todo: any = state.find((t: any) => t.id === id);
      if (todo) todo.text = newText;
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
