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

export const voteNotify = (content) => {
  return{
    type: 'SHOW_NOTIFICATION',
    message: `You voted anecdote: "${content}"`
  }
}

export const clearNotify = () => {
  return{
    type: 'HIDE_NOTIFICATION'
  }
}

export default notificationReducer