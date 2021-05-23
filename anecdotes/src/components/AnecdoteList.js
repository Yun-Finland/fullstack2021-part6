import { useSelector, useDispatch } from 'react-redux' 
import { voteAction } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => 
        <Anecdote 
          anecdote = {anecdote} 
          voteClick = {()=>dispatch(voteAction(anecdote.id))}
          key ={anecdote.id} 
        />
      )}
    </div>
  )

}

export default AnecdoteList