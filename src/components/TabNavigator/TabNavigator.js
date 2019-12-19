import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Dashboard from "../../containers/DashBoardComponent/DashBoardComponent";
import RemoveItemComponent from "../RemoveItemComponent/RemoveItemComponent";

const tabNavigator = props => (
  <Tabs
    defaultActiveKey="Add Item"
    id="uncontrolled-tab-example"
    style={{ width: "50%", margin: "0 auto" }}
  >
    <Tab eventKey="Add Item" title="Add Item">
      <Dashboard />
      {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="Remove Item" title="Remove Item">
      <RemoveItemComponent />
    </Tab>
  </Tabs>
);

export default tabNavigator;
