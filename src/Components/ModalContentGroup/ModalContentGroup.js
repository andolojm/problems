import { connect } from 'react-redux'
import Component from './Component'
import { deleteModalItem, closeModals } from '../../actions'
require('./ModalContentGroup.css')

const mapStateToProps = (state, ownProps) => ({
  section: state.section.byId.find(it => it.id === state.modalSection)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: (item) => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)