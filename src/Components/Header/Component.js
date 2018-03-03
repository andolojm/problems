import React from 'react'
import DevUtils from '../DevUtils/DevUtils'

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
    <hr />
    <div>
      <input type="text" id="problemtext" value={problemInputText}
          onChange={e => onProblemTextChange(e.target.value)} />
      <select onChange={e => onProblemGroupSelectionChange(e.target.value)}
          value={problemGroupSelection}>
        {groupList.map(it => (
          <option key={it.id} value={it.id}>{it.name}</option>
        ))}
      </select>
      <button onClick={onNewProblemClick}>
        Submit new problem
      </button>
    </div>
    <hr />
    <div>
      <input type="text" id="groupname" value={groupInputText}
          onChange={e => onGroupTextChange(e.target.value)} />
      <button onClick={onNewGroupClick}>
        Submit new group
      </button>
    </div>
    <hr />
  </div>
)