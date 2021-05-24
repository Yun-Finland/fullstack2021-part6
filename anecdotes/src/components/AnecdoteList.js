import { useSelector, useDispatch } from 'react-redux' 
import { voteAction } from '../reducers/anecdoteReducer'
import { voteNotify, clearNotify } from '../reducers/notificationReducer'

const Anecdote = ({anecdote, voteClick}) => {

  return (
    <div>
      <div>
        {anecdote.content} 
      </div>
      <div>
        has {anecdote.votes} votes
        <button onClick={voteClick}>vote</button>
      </div> 
    </div>
  )    
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({filter, anecdotes})=>{
    return anecdotes.filter(n => (n.content).toLowerCase().includes(filter))
  })

  const voteClick = (anecdote)=> {
    dispatch(voteAction(anecdote.id))
    dispatch(voteNotify(anecdote.content))
    setTimeout(() => {
      dispatch(clearNotify())
    }, 5000);
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => 
        <Anecdote 
          anecdote = {anecdote} 
          voteClick = {()=>voteClick(anecdote)}
          key ={anecdote.id} 
        />
      )}
    </div>
  )

}

export default AnecdoteList