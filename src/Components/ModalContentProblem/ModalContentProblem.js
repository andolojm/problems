import React from 'react'
import { connect } from 'react-redux'
import { deleteModalItem, closeModals } from '../../actions'
import Button from '../Button/Button'
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

export default connect(mapStateToProps, mapDispatchToProps)(
  ({problem, section, onDeleteClick, onCancelClick}) => (
    <div>
      <h3 className="modal-header">
        {problem.text}
      </h3>
      <div className="modal-content">
        Section: {section.name}
      </div>
      <div className="modal-action modal-action-left">
        <Button onButtonClick={onCancelClick}>
          Cancel
        </Button>
      </div>
      <div className="modal-action modal-action-right">
        <Button onButtonClick={() => onDeleteClick(problem.id)}>
          Solved!
        </Button>
      </div>
    </div>
  )
)