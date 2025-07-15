// src/components/employee/EmployeeSidebar.js
import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const EmployeeSidebar = () => (
  <Menu
    vertical
    fluid
    size="large"
    style={{
      height: "100vh",
      borderRight: "1px solid #ccc",
      padding: "0em",
    }}
  >
    <Menu.Item as={NavLink} exact to="/employee/dashboard" content="Dashboard" />
    <Menu.Item as={NavLink} to="/employee/assets" content="Assigned Assets" />
    <Menu.Item as={NavLink} to="/employee/request" content="Raise Request" />
    <Menu.Item as={NavLink} to="/employee/status" content="Request Status" />
  </Menu>
);

export default EmployeeSidebar;
