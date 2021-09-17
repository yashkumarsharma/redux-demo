const userReducer = (state = 2, action) => {
  console.log('from user reducer')
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default userReducer
