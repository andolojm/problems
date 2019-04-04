import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { RootStateObject } from "../state";

const mapStateToProps = (state: RootStateObject, ownProps: { textPlaceholder: string; textValue: string; selectValues: string[]; selectedValue: string; }) => ({
  textPlaceholder: ownProps.textPlaceholder,
  textValue: ownProps.textValue,
  selectValues: ownProps.selectValues,
  selectedValue: ownProps.selectedValue
});

const mapDispatchToProps = (dispatch: (arg0: any) => void, ownProps: { onTextChange: (arg0: string) => void; onSelectChange: (arg0: string) => void; }) => ({
  onTextChange: (value: string) => ownProps.onTextChange(value),
  onSelectChange: (value: string) => dispatch(ownProps.onSelectChange(value))
});

const FullWidthInput = styled.input`
  background-color: #ffebee;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 80%;
  font-family: "Arvo";
  color: #ca3737;
  text-shadow: 0 2px 0 white;
  margin: 5px 0 0 0;
  width: 100%;
`;

const LeftInput = FullWidthInput.extend`
  float: left;
  width: 65%;
`;

const RightInput = FullWidthInput.withComponent("select").extend`
  float: right;
  width: 33%;
`;

interface InputProps {
  textPlaceholder: string,
  textValue: string,
  selectValues: string[],
  selectedValue: string,
  onTextChange: (e: string) => void,
  onSelectChange: (e: string) => void
}

const input = (props: InputProps) => props.selectedValue
  ? (<div>
    <LeftInput
      type="text"
      placeholder={props.textPlaceholder}
      value={props.textValue}
      onChange={e => props.onTextChange(e.target.value)}
    />
    <RightInput
      onChange={(e: { target: { value: any; }; }) => props.onSelectChange(e.target.value)}
      value={props.selectedValue}
    >
      {props.selectValues}
    </RightInput>
  </div>)
  : (<div>
    <FullWidthInput
      type="text"
      placeholder={props.textPlaceholder}
      value={props.textValue}
      onChange={e => props.onTextChange(e.target.value)}
    />
  </div>);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(input);