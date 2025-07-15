import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import AdminTopbar from "./AdminTopbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <AdminTopbar onToggleSidebar={handleSidebarToggle} />
      <Grid style={{ marginTop: "3em" }}>
        {sidebarVisible && (
          <Grid.Column width={3}>
            <AdminSidebar />
          </Grid.Column>
        )}
        <Grid.Column width={sidebarVisible ? 13 : 16} style={{ padding: "0.5em" }}>
          {children}
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AdminLayout;
