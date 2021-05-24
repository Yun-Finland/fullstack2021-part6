import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created a new anecdote: "${content}"`,5))
  }

  return (
    <div>
      <h1>Create new anecdote</h1>
      <form onSubmit = {addNewAnecdote}>
        <input name="anecdote"/>
        <br/>
        <button type="submit"> create </button>
      </form>
    </div>
  )
}

export default AnecdoteForm