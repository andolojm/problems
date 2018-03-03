import React from 'react'
import DevUtils from '../DevUtils/DevUtils'
import Button from '../Button/Button'

export default ({
    problemInputText, groupInputText, groupList, problemGroupSelection,
    onNewGroupClick, onProblemTextChange, onNewProblemClick,
    onGroupTextChange, onProblemGroupSelectionChange
  }) => (
  <div>
    <div>
      <h1>Problems</h1>
    </div>
    <DevUtils />
    <div className="header-input-group">
      <div className="header-input-group-line">
        <input type="text" id="problemtext" value={problemInputText}
            onChange={e => onProblemTextChange(e.target.value)} />
        <select onChange={e => onProblemGroupSelectionChange(e.target.value)}
            value={problemGroupSelection}>
          {groupList.map(it => (
            <option key={it.id} value={it.id}>{it.name}</option>
          ))}
        </select>
      </div>
      <Button onButtonClick={onNewProblemClick}>
        Submit new problem
      </Button>
    </div>
    <div className="header-input-group">
      <div className="header-input-group-line">
        <input type="text" id="groupname" value={groupInputText}
            onChange={e => onGroupTextChange(e.target.value)} />
      </div>
      <Button onButtonClick={onNewGroupClick}>
        Submit new group
      </Button>
    </div>
  </div>
)