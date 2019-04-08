import React from "react";
import { connect } from "react-redux";
import { deleteModalItem, closeModals } from "../../actions";
import Button from "../Button";
import {
  ModalHeader,
  ModalActionLeft,
  ModalActionRight,
  ModalContent
} from "./Components";
import { RootStateObject, StateProblem, StateGroup } from "../../state";

const mapStateToProps = (state: RootStateObject, ownProps:any) => ({
  problem: state.app.problem.byId.find(it => it.id === state.app.modalProblem),
  group: state.app.group.byId.find(it =>
    it.problems.includes(state.app.modalProblem)
  )
});

const mapDispatchToProps = (dispatch: (arg0: any) => void, ownProps:any) => ({
  onDeleteClick: (item: string) => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals())
});

interface ModalContentProblemProps {
  problem: StateProblem | undefined,
  group: StateGroup | undefined,
  onDeleteClick: (e: string) => void,
  onCancelClick: () => void
}

const modalContentProblem = (props: ModalContentProblemProps) => {
  const problemText = props.problem ? props.problem.text : 'Error';
  const problemId = props.problem ? props.problem.id : 'Error';
  const groupName = props.group ? props.group.name : 'Error';

  return <div>
    <ModalHeader>{problemText}</ModalHeader>
    <ModalContent>Group: {groupName}</ModalContent>
    <ModalActionLeft>
      <Button onButtonClick={props.onCancelClick}>Cancel</Button>
    </ModalActionLeft>
    <ModalActionRight>
      <Button onButtonClick={() => props.onDeleteClick(problemId)}>Solved!</Button>
    </ModalActionRight>
  </div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modalContentProblem);