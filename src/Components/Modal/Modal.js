import { connect } from 'react-redux'
import Component from './Component'
import { deleteModalItem, closeModals } from '../../actions'
require('./Modal.css')

/*  Modal currently can display both Problem and Section objects
    Perhaps in the future this could just by fully dynamic:
     - Title, text, leftBtnText, leftBtnAction, rightBtnText, rightBtnAction */

const mapStateToProps = (state, ownProps) => {
  let problem = null
  let section = null

  // For sections, problem field should remain null
  if(state.modalSection) {
    section = state.section.byId.find(
      it => it.id === state.modalSection)
  } else {
    problem = state.problem.byId.find(
      it => it.id === state.modalProblem)
    section = state.section.byId.find(
      it => it.problems.includes(state.modalProblem))
  }

  return { problem, section }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClick: (item) => dispatch(deleteModalItem(item)),
    onCancelClick: () => dispatch(closeModals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)