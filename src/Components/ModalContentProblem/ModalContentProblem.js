import { connect } from 'react-redux'
import Component from './Component'
import { deleteModalItem, closeModals } from '../../actions'
require('./ModalContentProblem.css')

/*  Modal currently can display both Problem and Section objects
    Perhaps in the future this could just by fully dynamic:
     - Title, text, leftBtnText, leftBtnAction, rightBtnText, rightBtnAction */

const mapStateToProps = (state, ownProps) => ({
  problem: state.problem.byId.find(
    it => it.id === state.modalProblem),
  section: state.section.byId.find(
    it => it.problems.includes(state.modalProblem))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: (item) => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)