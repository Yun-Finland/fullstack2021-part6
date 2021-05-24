const filterReducer = (state='', action) => {
  switch(action.type){
    case 'FILTER':
     return action.data
    case 'ALL':
      return ""
    default: 
      return state
  }
}

export const filterAction = (filter)=> {
  return {
    type: 'FILTER',
    data: filter
  }
}

export default filterReducer