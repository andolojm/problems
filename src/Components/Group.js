import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { openProblemModal, openGroupModal } from "../actions";
import Button from "./Button";
import img from "./ComponentAssets/menu.svg";

const mapStateToProps = (state, ownProps) => {
  const group = state.app.group.byId.find(it => it.id === ownProps.id);
  const problems = state.app.problem.byId.filter(it =>
    group.problems.includes(it.id)
  );
  return {
    group,
    problems
  };
};

const Group = styled.div`
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  onProblemClick: e => dispatch(openProblemModal(e)),
  onGroupClick: e => dispatch(openGroupModal(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ group, problems, onProblemClick, onGroupClick }) => (
  <Group>
    <GroupHeader>{group.name}</GroupHeader>
    <GroupHamburger
      alt="Edit Group Menu"
      onClick={() => onGroupClick(group.id)}
      src={img}
    />
    <GroupProblems>
      {problems.map(it => (
        <div key={it.id}>
          <Button actionId={it.id} onButtonClick={e => onProblemClick(e)}>
            {it.text}
          </Button>
        </div>
      ))}
    </GroupProblems>
  </Group>
));
