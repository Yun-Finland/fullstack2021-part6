import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer)

const App = () =>{
  const increaseGood =()=>{
    store.dispatch({
      type: 'GOOD'
    })
  }

  const increaseOk =()=>{
    store.dispatch({
      type: 'OK'
    })
  }

  const increaseBad =()=>{
    store.dispatch({
      type: 'BAD'
    })
  }

  return(
    <div>
      <h1>Give Feeback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseOk}>ok</button>
      <button onClick={increaseBad}>bad</button>
      <h1>Statics</h1>
      <p>good {store.getState().good}</p>
      <p>ok {store.getState().ok}</p>
      <p>bad {store.getState().bad}</p>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)