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
import { RootStateObject, StateGroup } from "../../state";

const mapStateToProps = (state: RootStateObject, ownProps: any) => ({
  group: state.app.group.byId.find(it => it.id === state.app.modalGroup)
});

const mapDispatchToProps = (dispatch: (arg0: any) => void, ownProps: any) => ({
  onDeleteClick: (item: string) => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals()),
  onEditSubmitClick: (value: string) => dispatch(submitGroupTitleEdit(value))
});

interface ModalContentGroupProps {
  group: StateGroup | undefined,
  onDeleteClick: (arg0: string) => any,
  onCancelClick: (arg0: string) => any,
  onEditSubmitClick: (arg0: string) => any
}

const modalContentGroup = (props: ModalContentGroupProps) => {
    const [groupNameTextValue, groupNameTextSetter] = useState("");
    const [groupEditExpanded, groupEditExpandedSetter] = useState(false);
    const [groupDeleteExpanded, groupDeleteExpandedSetter] = useState(false);
    const groupName: string = props.group ? props.group.name : 'Error';
    const groupId: string = props.group ? props.group.id : 'Error';

    return (
      <div>
        <ModalHeader>{groupName}</ModalHeader>
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
                  props.onEditSubmitClick(groupNameTextValue);
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
                  props.onDeleteClick(groupId);
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
          <Button onButtonClick={props.onCancelClick}>Close</Button>
        </ModalClose>
      </div>
    );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modalContentGroup);
