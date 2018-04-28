import { connect } from 'react-redux'
import Component from './Component'
import {
  addGroup, addProblem, changeGroupInputText,
  changeProblemInputText, changeProblemGroupSelection,
  toggleHeaderProblem, toggleHeaderSection, cancelHeaderSubmission
} from '../../actions'
require('./Header.css')

const mapStateToProps = (state, ownProps) => ({
  problemText: state.problemInputText,
  groupName: state.groupInputText,
  groupList: state.section.byId,
  problemGroupSelection: state.problemGroupSelectionId,
  problemExpanded: state.problemExpanded,
  sectionExpanded: state.sectionExpanded,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: () => dispatch(addGroup()),
  onNewProblemClick: () => dispatch(addProblem()),
  onProblemTextChange: (value) => dispatch(changeProblemInputText(value)),
  onProblemGroupSelectionChange: (value) => dispatch(changeProblemGroupSelection(value)),
  onGroupTextChange: (value) => dispatch(changeGroupInputText(value)),
  onToggleSection: () => dispatch(toggleHeaderSection()),
  onToggleProblem: () => dispatch(toggleHeaderProblem()),
  onCancelSubmission: () => dispatch(cancelHeaderSubmission()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)