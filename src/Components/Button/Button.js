import { connect } from 'react-redux'
import Component from './Component'
require('./Button.css')

const mapStateToProps = (state, ownProps) => {
  return ({
    text: ownProps.children
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => ownProps.onButtonClick()
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)