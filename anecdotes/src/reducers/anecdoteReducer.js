import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state=[], action)=> {

  switch(action.type){
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      return state.map(anecdote => anecdote.id!==action.data.id ? anecdote : action.data)
    case 'SHOW_FILTER':
      return state.filter(anecdote => (anecdote.toLowerCase()).includes(action.filter))
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (content)=>{
  return {
    "content": content,
    "id": getId(),
    "votes": 0
  }
}

export const createAnecdote = (content)=>{
  return async dispatch => {
    const newObject = await anecdoteService.createNew(asObject(content))
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newObject
    })
  }
}

export const addVotes = (anecdote) => {
  return async dispatch =>{
    const newObject = {...anecdote, "votes": anecdote.votes + 1}
    const returnedObejct = await anecdoteService.update(newObject.id, newObject)
    dispatch({
      type: 'VOTE',
      data: returnedObejct
    })
  }
}

export const initializeAnecdote = ()=>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES', 
      data: anecdotes
    })
  }
}

export default anecdoteReducer