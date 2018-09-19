import React from "react";
import { connect } from "react-redux";
import Group from "./Group";

const mapStateToProps = (state, ownProps) => ({
  groups: state.app.group.byId
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ groups }) => (
  <div>
    {groups.map(it => (
      <Group key={it.id} id={it.id} />
    ))}
  </div>
));
