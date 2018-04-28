import React from 'react'
import Transition from 'react-transition-group/Transition'

import Button from '../Button/Button'

const transitionStyles = {
  entering: { height: 0 },
  entered:  { height: '45px' },
  exiting:  { height: '45px' },
  exited:   { height: 0 }
}

export default ({
  section, groupEditInputText, sectionEditExpanded, onDeleteClick,
  onCancelClick, onEditCancelClick, onEditSubmitClick, onGroupEditTextChange
}) => (
  <div>
    <h3 className="modal-header">
      {section.name}
    </h3>
    <div>
      <Transition in={sectionEditExpanded} classNames="input" timeout={200}>
        {state => (
          <div className="transition"
              style={{...transitionStyles[state]}}>
            <input type="text" id="groupname" value={groupEditInputText}
                onChange={e => onGroupEditTextChange(e.target.value)}
                className="input input-1-wide"
                placeholder="Group name" />
          </div>
        )}
      </Transition>
      <Button onButtonClick={onEditSubmitClick}>
        {sectionEditExpanded ? 'Save' : 'Edit'} Title
      </Button>
      <Transition in={sectionEditExpanded} classNames="input" timeout={200}>
        {state => (
          <div className="transition"
              style={{...transitionStyles[state]}}>
            <Button styleOverride={true} onButtonClick={onEditCancelClick}>
              Cancel
            </Button>
          </div>
        )}
      </Transition>
    </div>
    <div>
      <Button onButtonClick={() => onDeleteClick(section.id)}>
        Delete
      </Button>
      <div className="modal-content">
        Warning: Deleting this section will delete all problems associated with it.
      </div>
    </div>
    <div className="modal-close">
      <Button onButtonClick={onCancelClick}>
        Close
      </Button>
    </div>
  </div>
)