import React from "react";
import { connect } from "react-redux";
import Group from "./Group";
import { StateGroup, RootStateObject } from "../state"

const mapStateToProps = (state: RootStateObject, ownProps: any) => ({
  groups: state.app.group.byId
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({});

interface GroupContainerProps {
  groups: StateGroup[]
}

const groupContainer = (props: GroupContainerProps) => 
  <div>
    {props.groups.map(it => (
      <Group key={it.id} id={it.id} />
    ))}
  </div>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(groupContainer);
