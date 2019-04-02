import React, { useState } from "react";
import { connect } from "react-redux";
import {
  deleteModalItem,
  closeModals,
  submitGroupTitleEdit
} from "../../actions";
import Button from "../Button";
import Input from "../Input";
import { ModalHeader, ModalClose, ModalContent } from "./Components";

const mapStateToProps = (state, ownProps) => ({
  group: state.app.group.byId.find(it => it.id === state.app.modalGroup)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: item => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals()),
  onEditSubmitClick: value => dispatch(submitGroupTitleEdit(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ group, onDeleteClick, onCancelClick, onEditSubmitClick }) => {
  const [groupNameTextValue, groupNameTextSetter] = useState("");
  const [groupEditExpanded, groupEditExpandedSetter] = useState(false);
  const [groupDeleteExpanded, groupDeleteExpandedSetter] = useState(false);

  return (
    <div>
      <ModalHeader>{group.name}</ModalHeader>
      <div>
        <div
          className={`height-transition${
            groupEditExpanded ? " height-transition-opened" : ""
          }`}
        >
          <Input
            textPlaceholder="Group name"
            textValue={groupNameTextValue}
            onTextChange={groupNameTextSetter}
          />
        </div>
        <Button
          onButtonClick={ groupEditExpanded
              ? () => {
                onEditSubmitClick(groupNameTextValue);
                groupDeleteExpandedSetter(false);
                groupEditExpandedSetter(false);
              }
              : () => {
                groupDeleteExpandedSetter(false);
                groupEditExpandedSetter(true);
              }
          }
        >
          {groupEditExpanded ? "Save" : "Edit"} Title
        </Button>
        <div
          className={`height-transition${
            groupEditExpanded ? " height-transition-opened" : ""
          }`}
        >
          <Button
            styleOverride={true}
            onButtonClick={() => groupEditExpandedSetter(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
      <div>
        <Button
          onButtonClick={ groupDeleteExpanded
              ? () => {
                onDeleteClick(group.id);
                groupDeleteExpandedSetter(false);
                groupEditExpandedSetter(false);
              }
              : () => {
                groupDeleteExpandedSetter(true);
                groupEditExpandedSetter(false);
              }
          }
        >
          {groupDeleteExpanded ? "Confirm Deletion" : "Delete"}
        </Button>
        <div
          className={`height-transition${
            groupDeleteExpanded ? " height-transition-opened" : ""
          }`}
        >
          <Button
            styleOverride={true}
            onButtonClick={() => groupDeleteExpandedSetter(false)}
          >
            Cancel
          </Button>
        </div>
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
});
