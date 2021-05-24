const notificationReducer = (state="", action)=>{
  
  switch(action.type){
    case 'SHOW_NOTIFICATION':
      return action.message
    case 'HIDE_NOTIFICATION':
      return ""
    default:
      return state
  }

}

export const createNotify = (content) => {
  return{
    type: 'SHOW_NOTIFICATION',
    message:`You created a new anecdote: "${content}"`
  }
  
}

export const clearNotify = () => {
  return{
    type: 'HIDE_NOTIFICATION'
  }
}

export const setNotification = (message, duration)=>{
  return dispatch=>{
    dispatch({
      type: 'SHOW_NOTIFICATION',
      message: message
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, duration*1000)
  }
}

export default notificationReducer