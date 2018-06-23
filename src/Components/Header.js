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
  float: right;
  padding: 10px;
  font-size: 210%;
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
      <div>
        <HeaderTitle>Problems</HeaderTitle>
      </div>
      <HeaderImage src={img} alt="Check Mark Logo" />
      <div className="input-group">
        <Transition in={problemExpanded} classNames="input" timeout={100}>
          {state => (
            <div
              className="input-group-line height-transition"
              style={{ ...transitionStyles[state] }}
            >
              <input
                type="text"
                id="problemtext"
                value={problemInputText}
                onChange={e => onProblemTextChange(e.target.value)}
                className="input input-2-wide left"
                placeholder="Problem text"
              />
              <select
                onChange={e => onProblemGroupSelectionChange(e.target.value)}
                value={problemGroupSelection}
                className="input input-2-wide right"
              >
                {groupList.map(it => (
                  <option key={it.id} value={it.id}>
                    {it.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </Transition>
        <div className="input-group-line">
          <Button
            onButtonClick={
              problemExpanded ? onNewProblemClick : onToggleProblem
            }
          >
            Submit new problem
          </Button>
        </div>
        <Transition in={problemExpanded} classNames="input" timeout={100}>
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
      </div>
      <div className="input-group">
        <Transition in={groupExpanded} classNames="input" timeout={100}>
          {state => (
            <div
              className="input-group-line height-transition"
              style={{ ...transitionStyles[state] }}
            >
              <input
                type="text"
                id="groupname"
                value={groupInputText}
                onChange={e => onGroupTextChange(e.target.value)}
                className="input input-1-wide"
                placeholder="Group name"
              />
            </div>
          )}
        </Transition>
        <div className="input-group-line">
          <Button
            onButtonClick={groupExpanded ? onNewGroupClick : onToggleGroup}
          >
            Submit new group
          </Button>
        </div>
        <Transition in={groupExpanded} classNames="input" timeout={100}>
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
      </div>
    </Header>
  )
);
