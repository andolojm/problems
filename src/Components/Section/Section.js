import React from "react";
import { connect } from "react-redux";
import { openProblemModal, openSectionModal } from "../../actions";
import Button from "../Button/Button";
import img from "./menu.svg";
require("./Section.css");

const mapStateToProps = (state, ownProps) => {
  const section = state.section.byId.find(it => it.id === ownProps.id);
  const problems = state.problem.byId.filter(it =>
    section.problems.includes(it.id)
  );
  return {
    section,
    problems
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onProblemClick: e => dispatch(openProblemModal(e)),
  onSectionClick: e => dispatch(openSectionModal(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ section, problems, onProblemClick, onSectionClick }) => (
    <div className="section">
      <h2 className="section-header">{section.name}</h2>
      <img
        className="section-hamburger"
        alt="Edit Section Menu"
        onClick={() => onSectionClick(section.id)}
        src={img}
      />
      <div className="section-problems">
        {problems.map(it => (
          <div key={it.id} className="section-problem-button">
            <Button actionId={it.id} onButtonClick={e => onProblemClick(e)}>
              {it.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
);
