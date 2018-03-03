import { connect } from 'react-redux'
import Component from './Component'
import { deleteModalProblem } from '../../actions'
require('./Modal.css')

const mapStateToProps = (state, ownProps) => ({
  problem: state.problem.byId.find(
    it => it.id === state.modalProblem)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => dispatch(deleteModalProblem())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)