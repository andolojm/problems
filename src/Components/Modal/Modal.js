import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ModalContentGroup from "./ModalContentGroup";
import ModalContentProblem from "./ModalContentProblem";
import { closeModals } from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  isProblem: state.app.modalProblem || false,
  isGroup: state.app.modalGroup || false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancelClick: () => dispatch(closeModals())
});

const Modal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 33%;
  left: 50%;
  width: 80%;
  margin-left: -40%;
  margin-top: -100px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
`;

const ModalUnderlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ isProblem, isGroup, onCancelClick }) => {
  if (isProblem || isGroup) {
    return (
      <div>
        <ModalUnderlay onClick={onCancelClick} />
        <Modal>
          {isProblem ? <ModalContentProblem /> : <ModalContentGroup />}
        </Modal>
      </div>
    );
  } else {
    return null;
  }
});
