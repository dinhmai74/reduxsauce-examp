import { combineReducers } from 'redux'
import { applyMiddleware, compose, createStore } from "redux";

/* ------------- Assemble The Reducers ------------- */
export const reducers=combineReducers({
  counter: require("./CounterRedux").reducer
})

// create store function
export default ()=>{
  // do another config here

  // get store from config
  const store = createStore(reducers)

  return store
}