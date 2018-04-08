import React from 'react'

export default ({onResetClick, onBootstrapClick}) => (
  <div id="devutils">
    <div>DEV UTILS: </div>
    <div>
      <button onClick={onResetClick}>Null state</button>
    </div>
    <div>
      <button onClick={onBootstrapClick}>Bootstrap state</button>
    </div>
  </div>
)