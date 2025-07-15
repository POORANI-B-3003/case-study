import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => (
  <Menu vertical fluid size="large" style={{ height: "100vh", borderRight: "1px solid #ccc",padding:"0em" }}>
    <Menu.Item as={NavLink} exact to="/admin/dashboard" content="Dashboard" />
    <Menu.Item as={NavLink} to="/admin/assets" content="Manage Assets" />
    <Menu.Item as={NavLink} to="/admin/employees" content="Manage Employees" />
    <Menu.Item as={NavLink} to="/admin/requests" content="Service Requests" />
    <Menu.Item as={NavLink} to="/admin/categories" content="Manage Categories" />
  </Menu>
);

export default AdminSidebar;
