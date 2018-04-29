import React from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";
import {
  deleteModalItem,
  closeModals,
  changeGroupEditText,
  submitGroupTitleEdit,
  cancelGroupTitleEdit,
  cancelGroupDeletion
} from "../../actions";
import Button from "../Button/Button";
require("./ModalContentGroup.css");

const mapStateToProps = (state, ownProps) => ({
  group: state.group.byId.find(it => it.id === state.modalGroup),
  groupEditInputText: state.groupEditInputText,
  groupEditExpanded: state.groupEditExpanded,
  groupDeleteExpanded: state.groupDeleteExpanded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: item => dispatch(deleteModalItem(item)),
  onDeleteCancelClick: () => dispatch(cancelGroupDeletion()),
  onCancelClick: () => dispatch(closeModals()),
  onEditCancelClick: () => dispatch(cancelGroupTitleEdit()),
  onEditSubmitClick: () => dispatch(submitGroupTitleEdit()),
  onGroupEditTextChange: text => dispatch(changeGroupEditText(text))
});

const transitionStyles = {
  entering: { height: 0 },
  entered: { height: "45px" },
  exiting: { height: "45px" },
  exited: { height: 0 }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    group,
    groupEditInputText,
    groupEditExpanded,
    groupDeleteExpanded,
    onDeleteClick,
    onCancelClick,
    onEditCancelClick,
    onEditSubmitClick,
    onGroupEditTextChange,
    onDeleteCancelClick
  }) => (
    <div>
      <h3 className="modal-header">{group.name}</h3>
      <div>
        <Transition in={groupEditExpanded} classNames="input" timeout={200}>
          {state => (
            <div className="transition" style={{ ...transitionStyles[state] }}>
              <input
                type="text"
                id="groupname"
                value={groupEditInputText}
                onChange={e => onGroupEditTextChange(e.target.value)}
                className="input input-1-wide"
                placeholder="Group name"
              />
            </div>
          )}
        </Transition>
        <Button onButtonClick={onEditSubmitClick}>
          {groupEditExpanded ? "Save" : "Edit"} Title
        </Button>
        <Transition in={groupEditExpanded} classNames="input" timeout={200}>
          {state => (
            <div className="transition" style={{ ...transitionStyles[state] }}>
              <Button styleOverride={true} onButtonClick={onEditCancelClick}>
                Cancel
              </Button>
            </div>
          )}
        </Transition>
      </div>
      <div>
        <Button onButtonClick={() => onDeleteClick(group.id)}>
          {groupDeleteExpanded ? "Confirm Deletion" : "Delete"}
        </Button>
        <Transition in={groupDeleteExpanded} classNames="input" timeout={200}>
          {state => (
            <div className="transition" style={{ ...transitionStyles[state] }}>
              <Button
                styleOverride={true}
                onButtonClick={() => onDeleteCancelClick()}
              >
                Cancel
              </Button>
            </div>
          )}
        </Transition>
        <div className="modal-content">
          Warning: Deleting this group will delete all problems associated
          with it.
        </div>
      </div>
      <div className="modal-close">
        <Button onButtonClick={onCancelClick}>Close</Button>
      </div>
    </div>
  )
);
