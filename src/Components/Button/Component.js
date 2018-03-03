import React from 'react'

export default ({text, actionId, onButtonClick }) => (
  <button className="button" onClick={() => onButtonClick(actionId)}>{text}</button>
)