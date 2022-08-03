import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState, useCallback } from 'react'

const IncrementCounter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.main.count)
  useEffect(() => {
    console.log(counter) 
    //setStateTodos(reduxTodos)
}, [counter])

  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add To Count</button>
    </div>
  )
}

export default IncrementCounter
