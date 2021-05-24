import { useSelector, useDispatch } from 'react-redux' 
import { addVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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
    if(filter === ""){
      return anecdotes
    }
    return anecdotes.filter(n => (n.content).toLowerCase().includes(filter.toLowerCase()))
  })

  const voteClick = (anecdote)=> {
    dispatch(addVotes(anecdote))
    dispatch(setNotification(`You voted anecdote: "${anecdote.content}"`,5))
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