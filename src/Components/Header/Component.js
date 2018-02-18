import React from 'react'

export default ({ problemInputText, groupInputText, onNewGroupClick, onProblemTextChange, onGroupTextChange }) => (
  <div>
    <h1>Problems</h1>
    <img src="" alt="Logo" />

    <button>
      I've got a problem
    </button>
    <input type="text" id="problemtext" value={problemInputText}
        onChange={e => onProblemTextChange(e.target.value)} />

    <button onClick={onNewGroupClick}>
      I want a new group
    </button>
    <input type="text" id="groupname" value={groupInputText}
        onChange={e => onGroupTextChange(e.target.value)} />
  </div>
)