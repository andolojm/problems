import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { StateObject } from "../state";

const mapStateToProps = (state: StateObject, ownProps: { textPlaceholder: string; textValue: string; selectValues: string[]; selectedValue: string; }) => ({
  textPlaceholder: ownProps.textPlaceholder,
  textValue: ownProps.textValue,
  selectValues: ownProps.selectValues,
  selectedValue: ownProps.selectedValue
});

const mapDispatchToProps = (dispatch: (arg0: any) => void, ownProps: { onTextChange: (arg0: string) => void; onSelectChange: (arg0: string) => void; }) => ({
  onTextChange: (value: string): void => ownProps.onTextChange(value),
  onSelectChange: (value: string): void => dispatch(ownProps.onSelectChange(value))
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

class Input extends React.Component<InputProps, StateObject> {
  render () {
    return this.props.selectedValue
      ? (<div>
        <LeftInput
          type="text"
          placeholder={this.props.textPlaceholder}
          value={this.props.textValue}
          onChange={e => this.props.onTextChange(e.target.value)}
        />
        <RightInput
          onChange={(e: { target: { value: any; }; }) => this.props.onSelectChange(e.target.value)}
          value={this.props.selectedValue}
        >
          {this.props.selectValues}
        </RightInput>
      </div>)
      : (<div>
        <FullWidthInput
          type="text"
          placeholder={this.props.textPlaceholder}
          value={this.props.textValue}
          onChange={e => this.props.onTextChange(e.target.value)}
        />
      </div>)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);