import { connect } from 'react-redux'
import Component from './Component'
require('./Button.css')

const mapStateToProps = (state, ownProps) => {
  return ({
    text: ownProps.children,
    actionId: ownProps.actionId
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: (e) => ownProps.onButtonClick(e)
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)