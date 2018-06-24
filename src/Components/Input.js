import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => ({
  textPlaceholder: ownProps.textPlaceholder,
  textValue: ownProps.textValue,
  selectValues: ownProps.selectValues,
  selectedValue: ownProps.selectedValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTextChange: value => dispatch(ownProps.onTextChange(value)),
  onSelectChange: value => dispatch(ownProps.SelectChange(value))
});

const Input = styled.input`
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

const LeftInput = Input.extend`
  float: left;
  width: 65%;
`;

const RightInput = Input.withComponent("select").extend`
  float: right;
  width: 33%;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    textPlaceholder,
    textValue,
    selectValues,
    selectedValue,
    textOnChange,
    selectOnChange
  }) =>
    selectedValue ? (
      <div>
        <LeftInput
          type="text"
          placeholder={textPlaceholder}
          value={textValue}
          onChange={e => textOnChange(e.target.value)}
        />
        <RightInput
          onChange={e => selectOnChange(e.target.value)}
          value={selectedValue}
        >
          {selectValues}
        </RightInput>
      </div>
    ) : (
      <div>
        <Input
          type="text"
          placeholder={textPlaceholder}
          value={textValue}
          onChange={e => textOnChange(e.target.value)}
        />
      </div>
    )
);
