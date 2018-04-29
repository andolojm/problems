import React from "react";
import { connect } from "react-redux";
import { openProblemModal, openGroupModal } from "../../actions";
import Button from "../Button/Button";
import img from "./menu.svg";
require("./Group.css");

const mapStateToProps = (state, ownProps) => {
  const group = state.group.byId.find(it => it.id === ownProps.id);
  const problems = state.problem.byId.filter(it =>
    group.problems.includes(it.id)
  );
  return {
    group,
    problems
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onProblemClick: e => dispatch(openProblemModal(e)),
  onGroupClick: e => dispatch(openGroupModal(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ group, problems, onProblemClick, onGroupClick }) => (
    <div className="group">
      <h2 className="group-header">{group.name}</h2>
      <img
        className="group-hamburger"
        alt="Edit Group Menu"
        onClick={() => onGroupClick(group.id)}
        src={img}
      />
      <div className="group-problems">
        {problems.map(it => (
          <div key={it.id} className="group-problem-button">
            <Button actionId={it.id} onButtonClick={e => onProblemClick(e)}>
              {it.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
);
