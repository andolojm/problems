import React, { useState } from "react";
import Transition from "react-transition-group/Transition";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  addGroup,
  addProblem,
  changeProblemGroupSelection,
  toggleHeaderProblem,
  toggleHeaderGroup,
  cancelHeaderSubmission
} from "../actions";
import Button from "./Button";
import Input from "./Input";
import img from "./ComponentAssets/check-mark.png";

const mapStateToProps = (state, ownProps) => ({
  problemText: state.app.problemInputText,
  groupList: state.app.group.byId,
  problemGroupSelection: state.app.problemGroupSelectionId,
  problemExpanded: state.app.problemExpanded,
  groupExpanded: state.app.groupExpanded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: value => dispatch(addGroup(value)),
  onNewProblemClick: value => dispatch(addProblem(value)),
  onProblemGroupSelectionChange: value =>
    dispatch(changeProblemGroupSelection(value)),
  onToggleGroup: () => dispatch(toggleHeaderGroup()),
  onToggleProblem: () => dispatch(toggleHeaderProblem()),
  onCancelSubmission: () => dispatch(cancelHeaderSubmission())
});

const transitionStyles = {
  entering: { height: 0 },
  entered: { height: "45px" },
  exiting: { height: "45px" },
  exited: { height: 0 }
};

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
    problemExpanded,
    groupExpanded,
    onNewGroupClick,
    onNewProblemClick,
    onProblemGroupSelectionChange,
    onToggleGroup,
    onToggleProblem,
    onCancelSubmission
  }) => {
    const [groupNameTextValue, groupNameTextSetter] = useState("");
    const [problemNameTextValue, problemNameTextSetter] = useState("");

    return (
      <Header>
        <HeaderTitle>Problems</HeaderTitle>
        <HeaderImage src={img} alt="Check Mark Logo" />
        <HeaderButtonLine>
          <Transition in={problemExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
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
            )}
          </Transition>
          <div>
            <Button
              onButtonClick={
                problemExpanded
                  ? () => onNewProblemClick(problemNameTextValue)
                  : onToggleProblem
              }
            >
              Submit new problem
            </Button>
          </div>
          <Transition in={problemExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
                <Button styleOverride={true} onButtonClick={onCancelSubmission}>
                  Cancel
                </Button>
              </div>
            )}
          </Transition>
        </HeaderButtonLine>
        <HeaderButtonLine>
          <Transition in={groupExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
                <Input
                  textPlaceholder="Group name"
                  textValue={groupNameTextValue}
                  onTextChange={groupNameTextSetter}
                />
              </div>
            )}
          </Transition>
          <div>
            <Button
              onButtonClick={
                groupExpanded
                  ? () => onNewGroupClick(groupNameTextValue)
                  : onToggleGroup
              }
            >
              Submit new group
            </Button>
          </div>
          <Transition in={groupExpanded} timeout={100}>
            {state => (
              <div
                className="height-transition"
                style={{ ...transitionStyles[state] }}
              >
                <Button styleOverride={true} onButtonClick={onCancelSubmission}>
                  Cancel
                </Button>
              </div>
            )}
          </Transition>
        </HeaderButtonLine>
      </Header>
    );
  }
);
