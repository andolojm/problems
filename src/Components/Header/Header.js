import { connect } from 'react-redux'
import Component from './Component'
import {
  addGroup, addProblem, changeGroupInputText,
  changeProblemInputText, changeProblemGroupSelection
} from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  problemText: state.problemInputText,
  groupName: state.groupInputText,
  groupList: state.section.byId,
  problemGroupSelection: state.problemGroupSelectionId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: () => dispatch(addGroup()),
  onNewProblemClick: () => dispatch(addProblem()),
  onProblemTextChange: (value) => dispatch(changeProblemInputText(value)),
  onProblemGroupSelectionChange: (value) => dispatch(changeProblemGroupSelection(value)),
  onGroupTextChange: (value) => dispatch(changeGroupInputText(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)