import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
//import mainReducer from './reducer'
import mainReducer from './reducer'
import thunk from 'redux-thunk';

//import { combineReducers, configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  main: mainReducer
})


/*const store = configureStore({
  reducer: rootReducer,

})*/

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}

export const wrapper = createWrapper(store)
