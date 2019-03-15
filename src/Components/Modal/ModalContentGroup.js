import React, { useState } from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";
import {
  deleteModalItem,
  closeModals,
  submitGroupTitleEdit,
  cancelGroupTitleEdit,
  cancelGroupDeletion
} from "../../actions";
import Button from "../Button";
import Input from "../Input";
import { ModalHeader, ModalClose, ModalContent } from "./Components";

const mapStateToProps = (state, ownProps) => ({
  group: state.app.group.byId.find(it => it.id === state.app.modalGroup),
  groupEditExpanded: state.app.groupEditExpanded,
  groupDeleteExpanded: state.app.groupDeleteExpanded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: item => dispatch(deleteModalItem(item)),
  onDeleteCancelClick: () => dispatch(cancelGroupDeletion()),
  onCancelClick: () => dispatch(closeModals()),
  onEditCancelClick: () => dispatch(cancelGroupTitleEdit()),
  onEditSubmitClick: value => dispatch(submitGroupTitleEdit(value))
});

const transitionStyles = {
  entering: { height: 0 },
  entered: { height: "45px" },
  exiting: { height: "45px" },
  exited: { height: 0 }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    group,
    groupEditExpanded,
    groupDeleteExpanded,
    onDeleteClick,
    onCancelClick,
    onEditCancelClick,
    onEditSubmitClick,
    onDeleteCancelClick
  }) => {
    const [groupNameTextValue, groupNameTextSetter] = useState("");
    return (
      <div>
        <ModalHeader>{group.name}</ModalHeader>
        <div>
          <Transition in={groupEditExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
                <Input
                  textPlaceholder="Group name"
                  textValue={groupNameTextValue}
                  onTextChange={groupNameTextSetter}
                />
              </div>
            )}
          </Transition>
          <Button onButtonClick={() => onEditSubmitClick(groupNameTextValue)}>
            {groupEditExpanded ? "Save" : "Edit"} Title
          </Button>
          <Transition in={groupEditExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
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
          <Transition in={groupDeleteExpanded} classNames="input" timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
                <Button
                  styleOverride={true}
                  onButtonClick={() => onDeleteCancelClick()}
                >
                  Cancel
                </Button>
              </div>
            )}
          </Transition>
          <ModalContent>
            <div>
              <span role="img" aria-label="Warning">
                ☠️
              </span>
            </div>
            <div>
              Deleting this group will delete all problems associated with it.
            </div>
          </ModalContent>
        </div>
        <ModalClose>
          <Button onButtonClick={onCancelClick}>Close</Button>
        </ModalClose>
      </div>
    );
  }
);
