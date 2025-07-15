import React, { useState } from "react";
import {
  Grid,
  Form,
  Button,
  Segment,
  Header,
  Image,
  Dropdown,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import authBg from "../../assets/auth_bg.png";

const roleOptions = [
  { key: "admin", text: "Admin", value: "admin" },
  { key: "employee", text: "Employee", value: "employee" },
];

const AdminSignup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { username, email, password, confirmPassword, role } = form;
    if (!username || !email || !password || password !== confirmPassword || !role) {
      alert("Please fill all fields correctly!");
      return;
    }
    navigate(`/auth/${role}`);
  };

  return (
    <Grid stackable columns={2} style={{ minHeight: "100vh" }}>
      <Grid.Column width={8} style={{ padding: 0 }}>
        <Image
          src={authBg}
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            filter: "blur(2px)",
          }}
        />
      </Grid.Column>

      <Grid.Column verticalAlign="middle" style={{ padding: "3em" }}>
        <Segment padded="very" style={{ maxWidth: 500, margin: "auto" }}>
          <Header as="h2" color="purple" textAlign="center">Signup</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Name"
              name="username"
              placeholder="Enter your name"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="User ID (Email)"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="Create Password"
              type="password"
              name="password"
              placeholder="Enter new password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <label>Role</label>
              <Dropdown
                placeholder="Select Role"
                fluid
                selection
                options={roleOptions}
                name="role"
                value={form.role}
                onChange={handleChange}
              />
            </Form.Field>
            <Button fluid color="purple" type="submit">
              Sign Up
            </Button>
          </Form>
          <p style={{ marginTop: "1em", textAlign: "center" }}>
            Already have an account?{" "}
            <a href="/auth/admin" style={{ color: "#6A1B9A" }}>
              Login
            </a>
          </p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default AdminSignup;
