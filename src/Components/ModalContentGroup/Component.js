import React from 'react'
import Button from '../Button/Button'

export default ({problem, section, onDeleteClick, onCancelClick}) => (
  <div>
    <h3 className="modal-header">
      {section.name}
    </h3>
    <div className="modal-content">
      Warning: Deleting this section will delete all problems associated with it.
    </div>
    <div className="modal-action modal-action-left">
      <Button onButtonClick={onCancelClick}>
        Cancel
      </Button>
    </div>
    <div className="modal-action modal-action-right">
      <Button onButtonClick={() => onDeleteClick(section.id)}>
        DELETE
      </Button>
    </div>
  </div>
)