import { connect } from 'react-redux'
import Component from './Component'
import { deleteModalProblem, openProblemModal } from '../../actions'
require('./Modal.css')

const mapStateToProps = (state, ownProps) => ({
  problem: state.problem.byId.find(
    it => it.id === state.modalProblem),
  section: state.section.byId.find(
    it => it.problems.includes(state.modalProblem))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => dispatch(deleteModalProblem()),
  onCancelClick: () => dispatch(openProblemModal(''))
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)