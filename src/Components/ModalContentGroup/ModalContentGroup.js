import { connect } from 'react-redux'
import Component from './Component'
import {
  deleteModalItem, closeModals,
  changeGroupEditText, submitGroupTitleEdit, cancelGroupTitleEdit
} from '../../actions'
require('./ModalContentGroup.css')

const mapStateToProps = (state, ownProps) => ({
  section: state.section.byId.find(it => it.id === state.modalSection),
  groupEditInputText: state.groupEditInputText,
  sectionEditExpanded: state.sectionEditExpanded
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: (item) => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals()),
  onEditCancelClick: () => dispatch(cancelGroupTitleEdit()),
  onEditSubmitClick: () => dispatch(submitGroupTitleEdit()),
  onGroupEditTextChange: (text) => dispatch(changeGroupEditText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)