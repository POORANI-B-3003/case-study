import React, { useState } from "react";
import { Menu, Dropdown, Icon, Image } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const AdminTopbar = ({ onToggleSidebar }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/admin");
  };

  return (
    <Menu fixed="top" borderless style={{ padding: "1em", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <Menu.Item onClick={onToggleSidebar}>
        <Icon name="bars" size="large" />
      </Menu.Item>
      <Menu.Item header>
        <Image src={logo} size="mini" style={{ marginRight: "1em" }} />
        <span style={{ fontWeight: "bold", fontSize: "1.2em", color: "#6A1B9A" }}>Asset Hub Admin</span>
      </Menu.Item>

      <Menu.Menu position="right">
        <Dropdown
          icon={null}
          trigger={<Icon name="user circle" size="large" style={{ cursor: "pointer" }} />}
          item
          pointing="top right"
          open={userDropdownOpen}
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          onBlur={() => setUserDropdownOpen(false)}
        >
          <Dropdown.Menu>
            <Dropdown.Item icon="user" text="Profile" onClick={() => alert("Logged in as admin@example.com")} />
            <Dropdown.Item icon="sign-out" text="Logout" onClick={handleLogout} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default AdminTopbar;
