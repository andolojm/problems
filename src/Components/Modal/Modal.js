import { connect } from 'react-redux'
import Component from './Component'
require('./Modal.css')

const mapStateToProps = (state, ownProps) => ({
  isProblem: state.modalProblem || false,
  isSection: state.modalSection || false
})

const mapDispatchToProps = (dispatch, ownProps) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Component)