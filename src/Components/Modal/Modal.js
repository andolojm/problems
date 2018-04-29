import React from "react";
import { connect } from "react-redux";
import ModalContentGroup from "../ModalContentGroup/ModalContentGroup";
import ModalContentProblem from "../ModalContentProblem/ModalContentProblem";
require("./Modal.css");

const mapStateToProps = (state, ownProps) => ({
  isProblem: state.modalProblem || false,
  isGroup: state.modalGroup || false
});

const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ isProblem, isGroup }) => {
    if (isProblem || isGroup) {
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
