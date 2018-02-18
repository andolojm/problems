import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = (state, ownProps) => {
  const data = state.section.byId.find(it => it.id === ownProps.id)
  return {
    name: data.name,
    problems: data.problems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component)