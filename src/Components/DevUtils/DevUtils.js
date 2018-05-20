import React from "react";
import { connect } from "react-redux";
import { resetState, bootstrapState } from "../../actions";
require("./DevUtils.css");

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onResetClick: () => dispatch(resetState()),
  onBootstrapClick: () => dispatch(bootstrapState())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ onResetClick, onBootstrapClick }) => (
    <div id="devutils">
      <div>DEV UTILS: </div>
      <div>
        <button onClick={onResetClick}>Null state</button>
      </div>
      <div>
        <button onClick={onBootstrapClick}>Bootstrap state</button>
      </div>
    </div>
  )
);
