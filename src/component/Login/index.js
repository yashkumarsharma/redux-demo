import React from 'react'

const Login = (props) => {
  const {
    count,
    onIncrementClick = () => {console.log('increment')},
    onDecrementClick = () => {console.log('decrement')},
  } = props

  return (
    <>
      Current Count - {count}
      <button onClick={onIncrementClick}> Increment </button>
      <button onClick={onDecrementClick}> Decrement </button>
    </>
  )
}

export default Login
