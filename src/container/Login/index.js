import React from 'react'
import { connect } from 'react-redux'

import Login from '../../component/Login'
import Action from '../../actions'

const LoginContainer = props => {
  console.log('I am in props', props)
  const {
    count = 0,
    onDecrementClick,
    onIncrementClick,
  } = props
  return (
    <Login
      count={count}
      onDecrementClick={onDecrementClick}
      onIncrementClick={onIncrementClick}
    />
  )
}

const mapStateToProps = state => {
  console.log('from state', state)
  return {
    count: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDecrementClick: () => dispatch({ type: Action.DECREMENT, data: 'yash' }),
    onIncrementClick: () => dispatch({ type: Action.INCREMENT, data: 'akanksha' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
// export default LoginContainer
