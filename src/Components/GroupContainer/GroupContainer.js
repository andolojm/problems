import React from "react";
import { connect } from "react-redux";
import Group from "../Group/Group";

const mapStateToProps = (state, ownProps) => ({
  groups: state.group.byId
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(({ groups }) => (
  <div id="group-container">
    {groups.map(it => <Group key={it.id} id={it.id} />)}
  </div>
));
