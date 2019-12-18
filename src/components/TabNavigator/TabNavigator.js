import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Dashboard from "../../containers/DashBoardComponent/DashBoardComponent";
const tabNavigator = props => (
  <Tabs defaultActiveKey="Add Item" id="uncontrolled-tab-example">
    <Tab eventKey="Add Item" title="Add Item">
      <Dashboard />
      {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="Remove Item" title="Remove Item">
      another testing
    </Tab>
  </Tabs>
);

export default tabNavigator;
