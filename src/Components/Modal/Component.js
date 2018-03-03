import React from 'react'
import Button from '../Button/Button'

export default ({problem, section, onDeleteClick, onCancelClick}) => {
  if(problem) {
    return (
      <div id="modal">
        <h3 className="modal-header">{problem.text}</h3>
        <div className="modal-content">Section: {section.name}</div>
        <div className="modal-action-left">
          <Button onButtonClick={onCancelClick}>Cancel</Button>
        </div>
        <div className="modal-action-right">
          <Button onButtonClick={onDeleteClick}>Solved!</Button>
        </div>
      </div>
    )
  } else {
    return null
  }
}