/* eslint-disable no-unused-vars */
//  useContext is not made for large project, 
// if you want to work with large project then use redux and redux tool kit
import {createContext, useContext} from 'react'

// context initial state
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'todo msg',
            completed: false,
        }

    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider