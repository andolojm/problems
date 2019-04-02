import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addGroup, addProblem, changeProblemGroupSelection } from "../actions";
import Button from "./Button";
import Input from "./Input";
import img from "./ComponentAssets/check-mark.png";

const mapStateToProps = (state, ownProps) => ({
  problemText: state.app.problemInputText,
  groupList: state.app.group.byId,
  problemGroupSelection: state.app.problemGroupSelectionId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: value => dispatch(addGroup(value)),
  onNewProblemClick: value => dispatch(addProblem(value)),
  onProblemGroupSelectionChange: value =>
    dispatch(changeProblemGroupSelection(value))
});

const Header = styled.div`
  margin-bottom: 25px;
`;

const HeaderImage = styled.img`
  position: absolute;
  top: -10px;
  left: 25px;
  width: 100px;
  transform: rotate(-20deg);
  z-index: -1;
`;

const HeaderTitle = styled.h1`
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  padding: 10px;
  font-size: 210%;
`;

const HeaderButtonLine = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    groupList,
    problemGroupSelection,
    onNewGroupClick,
    onNewProblemClick,
    onProblemGroupSelectionChange
  }) => {
    const [groupNameTextValue, groupNameTextSetter] = useState("");
    const [problemNameTextValue, problemNameTextSetter] = useState("");

    const [problemExpanded, problemExpandedSetter] = useState(false);
    const [groupExpanded, groupExpandedSetter] = useState(false);

    return (
      <Header>
        <HeaderTitle>Problems</HeaderTitle>
        <HeaderImage src={img} alt="Check Mark Logo" />
        <HeaderButtonLine>
          <div
            className={`height-transition${
              problemExpanded ? " height-transition-opened" : ""
            }`}
          >
            <Input
              textPlaceholder="Problem text"
              textValue={problemNameTextValue}
              onTextChange={problemNameTextSetter}
              selectedValue={problemGroupSelection}
              onSelectChange={onProblemGroupSelectionChange}
              selectValues={groupList.map(it => (
                <option key={it.id} value={it.id}>
                  {it.name}
                </option>
              ))}
            />
          </div>
          <div>
            <Button
              onButtonClick={ problemExpanded
                  ? () => {
                    onNewProblemClick(problemNameTextValue);
                    problemExpandedSetter(false);
                  }
                  : () => {
                    problemExpandedSetter(true);
                    groupExpandedSetter(false);
                  }
              }
            >
              Submit new problem
            </Button>
          </div>
          <div
            className={`height-transition${
              problemExpanded ? " height-transition-opened" : ""
            }`}
          >
            <Button
              styleOverride={true}
              onButtonClick={() => problemExpandedSetter(false)}
            >
              Cancel
            </Button>
          </div>
        </HeaderButtonLine>
        <HeaderButtonLine>
          <div
            className={`height-transition${
              groupExpanded ? " height-transition-opened" : ""
            }`}
          >
            <Input
              textPlaceholder="Group name"
              textValue={groupNameTextValue}
              onTextChange={groupNameTextSetter}
            />
          </div>
          <div>
            <Button
              onButtonClick={
                groupExpanded
                  ? () => {
                    onNewGroupClick(groupNameTextValue);
                    groupExpandedSetter(false);
                  }
                  : () => {
                    groupExpandedSetter(true);
                    problemExpandedSetter(false);
                  }
              }
            >
              Submit new group
            </Button>
          </div>
          <div
            className={`height-transition${
              groupExpanded ? " height-transition-opened" : ""
            }`}
          >
            <Button
              styleOverride={true}
              onButtonClick={() => groupExpandedSetter(false)}
            >
              Cancel
            </Button>
          </div>
        </HeaderButtonLine>
      </Header>
    );
  }
);
