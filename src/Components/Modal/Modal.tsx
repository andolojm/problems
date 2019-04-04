import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ModalContentGroup from "./ModalContentGroup";
import ModalContentProblem from "./ModalContentProblem";
import { closeModals } from "../../actions";
import { RootStateObject } from "../../state";

const mapStateToProps = (state: RootStateObject, ownProps: any) => ({
  isProblem: !!state.app.modalProblem,
  isGroup: !!state.app.modalGroup
});

const mapDispatchToProps = (dispatch: (arg0: (any)) => void, ownProps: any) => ({
  onCancelClick: () => dispatch(closeModals())
});

const ModalDiv = styled.div`
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

interface ModalProps {
  isProblem: boolean,
  isGroup: boolean, 
  onCancelClick: () => void
}


const modal = (props: ModalProps) => {
  if (props.isProblem || props.isGroup) {
    return (
      <div>
        <ModalUnderlay onClick={props.onCancelClick} />
        <ModalDiv>
          {props.isProblem ? <ModalContentProblem /> : <ModalContentGroup />}
        </ModalDiv>
      </div>
    );
  } else {
    return null;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modal);
