import { connect } from 'react-redux'
import Component from './Component'
import { openProblemModal, openSectionModal } from '../../actions'
require('./Section.css')

const mapStateToProps = (state, ownProps) => {
  const section = state.section.byId.find(
    it => it.id === ownProps.id)
  const problems = state.problem.byId.filter(
    it => section.problems.includes(it.id))
  return {
    section, problems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onProblemClick: (e) => dispatch(openProblemModal(e)),
  onSectionClick: (e) => dispatch(openSectionModal(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)