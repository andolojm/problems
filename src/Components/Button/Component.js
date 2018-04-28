import React from 'react'

export default ({text, actionId, isStyleOverridden, onButtonClick }) => {

  // "Alt" style to differentiate buttons - In the future, maybe multiple options?
  let style = {}
  if(isStyleOverridden) {
    style = {
      backgroundColor: '#222',
      height: '40px',
      margin: 0,
    }
  }

  return (
    <button className="button" style={style}
        onClick={() => onButtonClick(actionId)}>{text}</button>
  )
}
