import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const DownloadTodos = "DownloadTodos"

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DownloadTodos:
      return { ...state, todos: action.todos }
    default:
      return state
  }
}

export const DownloadTodosAction = (todos) => ({type:DownloadTodos, todos})
