import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { resetState, bootstrapState } from "../actions";
import { RootStateObject } from "../state";

const mapStateToProps = (state: RootStateObject, ownProps: any) => ({});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void, ownProps: any) => ({
  onResetClick: () => dispatch(resetState()),
  onBootstrapClick: () => dispatch(bootstrapState())
});

const DevUtilsComponent = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  font-size: 80%;
`;

const Button = styled.button`
  padding: 4px;
  width: 100%;
  border-radius: 4px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.05);
`;

interface DevUtilsProps {
  onResetClick: () => void,
  onBootstrapClick: () => void
}

const devUtils = (props: DevUtilsProps) =>
  <DevUtilsComponent>
    <div>DEV UTILS: </div>
    <div>
      <Button onClick={props.onResetClick}>Null state</Button>
    </div>
    <div>
      <Button onClick={props.onBootstrapClick}>Bootstrap state</Button>
    </div>
  </DevUtilsComponent>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(devUtils);
