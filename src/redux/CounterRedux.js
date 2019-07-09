    
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  increment: null, // => this will be Types.INCREMENT
  decrement: null
})

export const CounterTypes=Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE=Immutable({
  data: 0
})

/* ------------- Reducers ------------- */

// increment
export const increase=(state)=> state.merge({ data: state.data+1 })
// decrement
export const decrease=(state)=> state.merge({ data: state.data-1 })

/* ------------- Hookup Reducers To Types ------------- */

const HANDLERS={
  [Types.INCREMENT]: increase,
  [Types.DECREMENT]: decrease
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
