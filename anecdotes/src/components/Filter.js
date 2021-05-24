import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const filterAnecdote = (event) =>{
    event.preventDefault()
    const filterCrit = event.target.value.toLowerCase()
    dispatch(filterAction(filterCrit))
  }

  const style = {
    marginBottom: 10
  }

  return(
    <div style={style}>
      filter <input onChange={filterAnecdote} />
    </div>
  )
}

export default Filter