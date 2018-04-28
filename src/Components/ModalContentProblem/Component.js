import React from 'react'
import Button from '../Button/Button'

export default ({problem, section, onDeleteClick, onCancelClick}) => (
  <div>
    <h3 className="modal-header">
      {problem.text}
    </h3>
    <div className="modal-content">
      Section: {section.name}
    </div>
    <div className="modal-action modal-action-left">
      <Button onButtonClick={onCancelClick}>
        Cancel
      </Button>
    </div>
    <div className="modal-action modal-action-right">
      <Button onButtonClick={() => onDeleteClick(problem.id)}>
        Solved!
      </Button>
    </div>
  </div>
)