import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer from './reducers/anecdoteReducer.js'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store