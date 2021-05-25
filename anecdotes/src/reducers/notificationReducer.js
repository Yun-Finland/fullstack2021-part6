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

export const clearNotify = () => {
  return{
    type: 'HIDE_NOTIFICATION'
  }
}

let timeout

export const setNotification = (message, duration)=>{
  clearTimeout(timeout)

  return dispatch=>{  
    dispatch({
      type: 'SHOW_NOTIFICATION',
      message: message
    })
    timeout = setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, duration*1000)
    
  }
}

export default notificationReducer