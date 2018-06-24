import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Modal from "./Modal/Modal";
import GroupContainer from "./GroupContainer";
import DevUtils from "./DevUtils";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(() => (
  <div>
    <Header />
    <GroupContainer />
    <Modal />
    {process.env.NODE_ENV === "development" && <DevUtils />}
  </div>
));