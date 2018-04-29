import React from 'react'
import { connect } from 'react-redux'
require('./Button.css')

const mapStateToProps = (state, ownProps) => {
  return ({
    text: ownProps.children,
    actionId: ownProps.actionId,
    isStyleOverridden: ownProps.styleOverride || false
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: (e) => ownProps.onButtonClick(e)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ({text, actionId, isStyleOverridden, onButtonClick }) => {

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
)