import Action from '../actions'

const loginReducer = (state = 2, action) => {
  console.log('from login action', action)
  switch (action.type) {
    case Action.INCREMENT:
      return state + 1
    case Action.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default loginReducer
