import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.children,
    actionId: ownProps.actionId,
    StyledButton: styledButton(ownProps.styleOverride)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: e => ownProps.onButtonClick(e)
});

const styledButton = alt => styled.button`
  box-sizing: border-box;
  color: ${alt ? "white" : "#333"};
  background-color: ${alt ? "#333" : "#f8f8f8"};
  border: ${alt ? "0" : "2px solid #e57373"};
  width: 100%;
  font-family: inherit;
  font-size: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-shadow: 0 1px 0 #aaa;
  border-radius: 3px;
  margin: ${alt ? "0" : "3px 0"};
  padding: 10px;
  height: ${alt ? "40px" : "inherit"};
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ text, actionId, StyledButton, onButtonClick }) => {
  return (
    <StyledButton onClick={() => onButtonClick(actionId)}>{text}</StyledButton>
  );
});
