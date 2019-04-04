import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { openProblemModal, openGroupModal } from "../actions";
import Button from "./Button";
import img from "./ComponentAssets/menu.svg";
import { RootStateObject, StateProblem, StateGroup } from "../state";

const mapStateToProps = (state: RootStateObject, ownProps: any) => {
  const group = state.app.group.byId.find(it => it.id === ownProps.id);
  
  if(group) {
    const problems = state.app.problem.byId.filter(it =>
      group.problems.includes(it.id)
    );
    return {
      group,
      problems
    };
  }
};

const mapDispatchToProps = (dispatch: (arg0: any) => void, ownProps: any) => ({
  onProblemClick: (e: string) => dispatch(openProblemModal(e)),
  onGroupClick: (e: string) => dispatch(openGroupModal(e))
});

const GroupDiv = styled.div`
  background-color: #eeeeee;
  width: 90%;
  margin: 15px auto;
  padding: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
`;

const GroupHeader = styled.h2`
  margin: 3px 0 5px 5px;
  font-size: 160%;
`;

const GroupProblems = styled.div`
  width: 90%;
  max-width: 400px;
  margin: auto;
`;

const GroupHamburger = styled.img`
  height: 32px;
  float: right;
`;

interface GroupProps {
  group: StateGroup,
  problems: StateProblem[],
  onProblemClick: (e: string) => void,
  onGroupClick: (e: string) => void,
}

const group = (props: GroupProps) => 
  <GroupDiv>
    <GroupHeader>{props.group.name}</GroupHeader>
    <GroupHamburger
      alt="Edit Group Menu"
      onClick={() => props.onGroupClick(props.group.id)}
      src={img}
    />
    <GroupProblems>
      {props.problems.map(it => (
        <div key={it.id}>
          <Button actionId={it.id} onButtonClick={(e: any) => props.onProblemClick(e)}>
            {it.text}
          </Button>
        </div>
      ))}
    </GroupProblems>
  </GroupDiv>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(group);
