import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = (state, ownProps) => ({
  sections: state.section.byId
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component)