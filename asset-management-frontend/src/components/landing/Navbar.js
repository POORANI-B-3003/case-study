import React, { useState } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Image,
  Button,
  Modal,
  Grid,
} from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  const handleRoleSelect = (role) => {
    closeSignupModal();
    navigate(`/auth/${role}/signup`);
  };

  return (
    <>
      <Menu secondary style={{ padding: "1em 0", borderBottom: "1px solid #eee" }}>
        <Container>
          {/* Logo */}
          <Menu.Item header>
            <Image src={logo} style={{ height: "50px", width: "50px" }} />
            <Menu.Item
              header
              style={{ fontWeight: "bold", color: "#6A1B9A" }}
            >
              Asset Hub
            </Menu.Item>
          </Menu.Item>

          {/* Dropdowns */}
          <Menu.Item position="center">
            <Dropdown
              item
              text="Solutions"
              open={activeIndex === 0}
              onClick={() => handleClick(0)}
            >
              <Dropdown.Menu>
                <Dropdown.Item>Asset Management</Dropdown.Item>
                <Dropdown.Item>Service Requests</Dropdown.Item>
                <Dropdown.Item>Mobile CMMS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              item
              text="Features"
              open={activeIndex === 1}
              onClick={() => handleClick(1)}
            >
              <Dropdown.Menu>
                <Dropdown.Item>Financial Tracking</Dropdown.Item>
                <Dropdown.Item>Predictive Maintenance</Dropdown.Item>
                <Dropdown.Item>IoT Integration</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              item
              text="Industries"
              open={activeIndex === 2}
              onClick={() => handleClick(2)}
            >
              <Dropdown.Menu>
                <Dropdown.Item>Manufacturing</Dropdown.Item>
                <Dropdown.Item>Healthcare</Dropdown.Item>
                <Dropdown.Item>Oil & Gas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              item
              text="Resources"
              open={activeIndex === 3}
              onClick={() => handleClick(3)}
            >
              <Dropdown.Menu>
                <Dropdown.Item>Help Center</Dropdown.Item>
                <Dropdown.Item>Case Studies</Dropdown.Item>
                <Dropdown.Item>Blog</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          {/* Right-side Sign Up */}
          <Menu.Item position="right">
            <Button color="purple" onClick={openSignupModal}>
              Sign Up/Sign In 
            </Button>
          </Menu.Item>
        </Container>
      </Menu>

      {/* Modal to select Admin or Employee */}
      <Modal open={showSignupModal} onClose={closeSignupModal} size="tiny">
        <Modal.Header>Select Your Role</Modal.Header>
        <Modal.Content>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Column>
              <h4>Admin</h4>
              <Button fluid color="purple" onClick={() => handleRoleSelect("admin")}>
                Continue as Admin
              </Button>
            </Grid.Column>
            <Grid.Column>
              <h4>Employee</h4>
              <Button fluid color="blue" onClick={() => handleRoleSelect("employee")}>
                Continue as Employee
              </Button>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Navbar;
