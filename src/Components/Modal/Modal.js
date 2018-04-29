import React from "react";
import { connect } from "react-redux";
import ModalContentGroup from "../ModalContentGroup/ModalContentGroup";
import ModalContentProblem from "../ModalContentProblem/ModalContentProblem";
require("./Modal.css");

const mapStateToProps = (state, ownProps) => ({
  isProblem: state.modalProblem || false,
  isSection: state.modalSection || false
});

const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ isProblem, isSection }) => {
    if (isProblem || isSection) {
      return (
        <div>
          <div id="modal-underlay" />
          <div id="modal">
            {isProblem ? <ModalContentProblem /> : <ModalContentGroup />}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
);
