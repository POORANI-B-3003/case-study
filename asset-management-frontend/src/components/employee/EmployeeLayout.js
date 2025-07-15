// src/components/employee/EmployeeLayout.js
import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EmployeeSidebar from "./EmployeeSidebar";
import EmployeeTopbar from "./EmployeeTopbar";

const EmployeeLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <EmployeeTopbar onToggleSidebar={handleSidebarToggle} />
      <Grid style={{ marginTop: "3em" }}>
        {sidebarVisible && (
          <Grid.Column width={3}>
            <EmployeeSidebar />
          </Grid.Column>
        )}
        <Grid.Column width={sidebarVisible ? 13 : 16} style={{ padding: "0.5em" }}>
          {children}
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EmployeeLayout;
