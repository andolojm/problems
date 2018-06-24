import React from "react";
import Transition from "react-transition-group/Transition";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  addGroup,
  addProblem,
  changeGroupInputText,
  changeProblemInputText,
  changeProblemGroupSelection,
  toggleHeaderProblem,
  toggleHeaderGroup,
  cancelHeaderSubmission
} from "../actions";
import Button from "./Button";
import Input from "./Input";
import img from "./ComponentAssets/check-mark.png";

const mapStateToProps = (state, ownProps) => ({
  problemText: state.problemInputText,
  groupName: state.groupInputText,
  groupList: state.group.byId,
  problemGroupSelection: state.problemGroupSelectionId,
  problemExpanded: state.problemExpanded,
  groupExpanded: state.groupExpanded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGroupClick: () => dispatch(addGroup()),
  onNewProblemClick: () => dispatch(addProblem()),
  onProblemTextChange: value => dispatch(changeProblemInputText(value)),
  onProblemGroupSelectionChange: value =>
    dispatch(changeProblemGroupSelection(value)),
  onGroupTextChange: value => dispatch(changeGroupInputText(value)),
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
    problemInputText,
    groupInputText,
    groupList,
    problemGroupSelection,
    problemExpanded,
    groupExpanded,
    onNewGroupClick,
    onProblemTextChange,
    onNewProblemClick,
    onGroupTextChange,
    onProblemGroupSelectionChange,
    onToggleGroup,
    onToggleProblem,
    onCancelSubmission
  }) => (
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
                textValue={problemInputText}
                textOnChange={onProblemTextChange}
                selectedValue={problemGroupSelection}
                selectOnChange={onProblemGroupSelectionChange}
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
              problemExpanded ? onNewProblemClick : onToggleProblem
            }
          >
            Submit new problem
          </Button>
        </div>
        <Transition in={problemExpanded} timeout={100}>
          {state => (
            <div
              className="input-group-line height-transition"
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
                textValue={groupInputText}
                textOnChange={onGroupTextChange}
              />
            </div>
          )}
        </Transition>
        <div>
          <Button
            onButtonClick={groupExpanded ? onNewGroupClick : onToggleGroup}
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
  )
);
