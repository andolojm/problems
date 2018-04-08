import React from 'react'
import Button from '../Button/Button'

export default ({problem, section, onDeleteClick, onCancelClick}) => {
  if(problem || section) {
    return (
      <div id="modal">
        <h3 className="modal-header">
          {problem ?
            problem.text :
            section.name}
        </h3>
        <div className="modal-content">
          {problem ?
            `Section: ${section.name}` :
            'Warning: Deleting this section will delete all problems associated with it.'}
        </div>
        <div className="modal-action-left">
          <Button onButtonClick={onCancelClick}>
            Cancel
          </Button>
        </div>
        <div className="modal-action-right">
          <Button onButtonClick={() => onDeleteClick(problem ? problem.id : section.id)}>
            {problem ?
              "Solved!" :
              "DELETE"
            }
          </Button>
        </div>
      </div>
    )
  } else {
    return null
  }
}