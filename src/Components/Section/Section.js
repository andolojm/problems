import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = (state, ownProps) => {
  const section = state.section.byId.find(
    it => it.id === ownProps.id)
  const problems = state.problem.byId.filter(
    it => section.problems.includes(it.id))
  return {
    section, problems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component)