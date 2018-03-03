import React from 'react'

export default ({onResetClick, onBootstrapClick}) => (
  <div>
    <span>DEV UTILS: </span>
    <button onClick={onResetClick}>Null state</button>
    <button onClick={onBootstrapClick}>Bootstrap state</button>
  </div>
)