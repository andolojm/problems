import { connect } from 'react-redux'
import Component from './Component'
import { resetState, bootstrapState } from '../../actions'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onResetClick: () => dispatch(resetState()),
  onBootstrapClick: () => dispatch(bootstrapState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)