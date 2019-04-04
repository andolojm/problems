import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { RootStateObject } from "../state";

const mapStateToProps = (state: RootStateObject, ownProps: any) => {
  return {
    text: ownProps.children,
    actionId: ownProps.actionId,
    StyledButton: styledButton(ownProps.styleOverride)
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: { onButtonClick: (arg0: string) => void; }) => ({
  onButtonClick: (e: string) => ownProps.onButtonClick(e)
});

const styledButton = (alt: boolean) => styled.button`
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

interface ButtonProps {
  StyledButton: any,
  onButtonClick: (e: string) => void,
  actionId: string,
  text: string
}

const button = (props: ButtonProps) => 
  <props.StyledButton onClick={() => props.onButtonClick(props.actionId)}>
    {props.text}
  </props.StyledButton>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(button);
