import { connect } from 'react-redux'
import Component from './Component'
import { addGroup, changeGroupInputText, changeProblemInputText } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  problemText: state.problemInputText,
  groupName: state.groupInputText
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: () => dispatch(addGroup()),
  onProblemTextChange: (value) => dispatch(changeProblemInputText(value)),
  onGroupTextChange: (value) => dispatch(changeGroupInputText(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)