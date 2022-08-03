import { createAction, createReducer } from "@reduxjs/toolkit";
//import { counterActionTypes } from "./action";


const DownloadTodos = "DownloadTodos"
const INCREMENT = "INCREMENT"


const initialState = {
  count: 0,
  todos: []
};

/*const DownloadTodos = createAction('DownloadTodos')

export default createReducer(initialState,{
  [DownloadTodos]: function(state){
    state.todos = action.todos
  }
})*/

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DownloadTodos:
      return { ...state, todos: action.todos };
    
    default:
      return state;
  }
}

export const DownloadTodosAction = (todos) => ({type:DownloadTodos, todos})