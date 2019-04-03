import React from "react";
import Header from "./Header";
import Modal from "./Modal/Modal";
import GroupContainer from "./GroupContainer";
import DevUtils from "./DevUtils";

export default () => 
  <div>
    <Header />
    <GroupContainer />
    <Modal />
    {process.env.NODE_ENV === "development" && <DevUtils />}
  </div>;