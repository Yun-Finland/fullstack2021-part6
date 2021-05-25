import { connect } from 'react-redux'
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

const AnecdoteList = (props) => {
 
  const returnedAnecdotes = props.anecdotes

  const voteClick = (anecdote)=> {
    props.addVotes(anecdote)
    props.setNotification(`You voted anecdote: "${anecdote.content}"`,5)
  }

  return (
    <div>
      {returnedAnecdotes
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

const mapStateToProps = (state) => {
  if( state.filer === ""){
    return{
      anecdotes: state.anecdotes
    }
  }
  return{
    anecdotes: (state.anecdotes).filter(n => (n.content).toLowerCase().includes((state.filter).toLowerCase()))
  }
}

const mapDispatchToProps ={
  addVotes, setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList