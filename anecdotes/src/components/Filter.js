import React from 'react'
import { connect } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = (props) => {

  const filterAnecdote = (event) =>{
    event.preventDefault()
    const filterCrit = event.target.value
    props.filterAction(filterCrit)
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

const mapDispatchToProps = {
  filterAction
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter