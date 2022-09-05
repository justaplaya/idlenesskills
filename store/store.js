import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import mainReducer from './reducer'
import thunk from 'redux-thunk';


const store = () => {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))
}
export const wrapper = createWrapper(store)
