import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { resetState, bootstrapState } from "../actions";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onResetClick: () => dispatch(resetState()),
  onBootstrapClick: () => dispatch(bootstrapState())
});

const DevUtils = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  font-size: 80%;
`;

const Button = styled.button`
  padding: 4px;
  width: 100%;
  border-radius: 4px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ onResetClick, onBootstrapClick }) => (
  <DevUtils>
    <div>DEV UTILS: </div>
    <div>
      <Button onClick={onResetClick}>Null state</Button>
    </div>
    <div>
      <Button onClick={onBootstrapClick}>Bootstrap state</Button>
    </div>
  </DevUtils>
));
