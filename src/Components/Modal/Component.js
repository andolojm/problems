import React from 'react'

export default ({problem, onDeleteClick}) => {
  if(problem) {
    return (
      <div id="modal">
        <h3>{problem.text}</h3>
        <div onClick={onDeleteClick}>Solved!</div>
      </div>
    )
  } else {
    return null
  }
}