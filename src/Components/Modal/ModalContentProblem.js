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

const mapStateToProps = (state, ownProps) => ({
  problem: state.app.problem.byId.find(it => it.id === state.app.modalProblem),
  group: state.app.group.byId.find(it =>
    it.problems.includes(state.app.modalProblem)
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: item => dispatch(deleteModalItem(item)),
  onCancelClick: () => dispatch(closeModals())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ problem, group, onDeleteClick, onCancelClick }) => (
  <div>
    <ModalHeader>{problem.text}</ModalHeader>
    <ModalContent>Group: {group.name}</ModalContent>
    <ModalActionLeft>
      <Button onButtonClick={onCancelClick}>Cancel</Button>
    </ModalActionLeft>
    <ModalActionRight>
      <Button onButtonClick={() => onDeleteClick(problem.id)}>Solved!</Button>
    </ModalActionRight>
  </div>
));
