import { createSlice, nanoid } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todo',
    initialState : {
        todos: [{ id: 1, text: "Wellcome to Todoapp" }],
    },
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos = [...state.todos, todo]; 
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});

export const { addtodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;
