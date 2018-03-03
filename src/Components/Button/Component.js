import React from 'react'

export default ({text, onButtonClick }) => (
  <button className="button" onClick={onButtonClick}>{text}</button>
)