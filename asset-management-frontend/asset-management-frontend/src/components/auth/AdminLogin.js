// AdminLogin.js (Updated with role dropdown and forgot password modal)

import React, { useState } from "react";
import {
  Grid,
  Form,
  Button,
  Segment,
  Header,
  Image,
  Modal,
  Dropdown,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import authBg from "../../assets/auth_bg.png";

const roleOptions = [
  { key: "admin", text: "Admin", value: "admin" },
  { key: "employee", text: "Employee", value: "employee" },
];

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "", role: "admin" });
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { email, password, role } = form;
    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }
    navigate(`/${role}/dashboard`);
  };

  const handleForgotSubmit = () => {
    if (resetEmail === "test@example.com") {
      setShowForgotModal(false);
      setShowResetModal(true);
    } else {
      alert("Email not found!");
    }
  };

  const handlePasswordReset = () => {
    if (newPassword.length >= 6) {
      alert("Password reset successful!");
      setShowResetModal(false);
    } else {
      alert("Password must be at least 6 characters.");
    }
  };

  return (
    <Grid stackable columns={2} style={{ minHeight: "100vh" }}>
      <Grid.Column width={8} style={{ padding: 0 }}>
        <Image
          src={authBg}
          style={{ height: "100vh", width: "100%", objectFit: "cover", filter: "blur(2px)" }}
        />
      </Grid.Column>

      <Grid.Column verticalAlign="middle" textAlign="center" style={{ padding: "3em" }}>
        <Segment padded="very" style={{ maxWidth: 500, margin: "auto" }}>
          <Header as="h2" color="purple">Login</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="User ID (Email)"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="Password"
              type="password"
              name="password"
              value={form.password}
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
              Login
            </Button>
          </Form>

          <p style={{ marginTop: "1em" }}>
            Forgot Password?{' '}
            <a href="#" onClick={() => setShowForgotModal(true)} style={{ color: "#6A1B9A" }}>Reset</a>
          </p>

          <p style={{ marginTop: "1em" }}>
            Don’t have an account?{' '}
            <a href="/auth/admin/signup" style={{ color: "#6A1B9A" }}>Signup</a>
          </p>
        </Segment>

        {/* Forgot Password Modal */}
        <Modal open={showForgotModal} onClose={() => setShowForgotModal(false)} size="tiny">
          <Modal.Header>Reset Password</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                label="Enter your registered email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <Button fluid color="purple" onClick={handleForgotSubmit}>
                Verify Email
              </Button>
            </Form>
          </Modal.Content>
        </Modal>

        {/* New Password Modal */}
        <Modal open={showResetModal} onClose={() => setShowResetModal(false)} size="tiny">
          <Modal.Header>Set New Password</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Button fluid color="purple" onClick={handlePasswordReset}>
                Save Password
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    </Grid>
  );
};

export default AdminLogin;
