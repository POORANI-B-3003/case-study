// src/pages/admin/ManageEmployees.js
import React, { useState } from "react";
import {
  Header,
  Segment,
  Button,
  Modal,
  Form,
  Table,
  Icon,
  Card,
} from "semantic-ui-react";
import AdminLayout from "../../components/admin/AdminLayout";

const ManageEmployees = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 101, name: "Poorani", email: "poo@example.com", role: "Admin", status: "Active" },
    { id: 102, name: "Ravi", email: "ravi@example.com", role: "Employee", status: "Inactive" },
    { id: 103, name: "Asha", email: "asha@example.com", role: "Employee", status: "Active" },
    { id: 104, name: "Vikram", email: "vikram@example.com", role: "Employee", status: "Inactive" },
    { id: 105, name: "Deepa", email: "deepa@example.com", role: "Employee", status: "Active" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateEmployee = () => {
    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = { ...updated[editIndex], ...formData };
      setEmployees(updated);
    } else {
      const newEmployee = { id: Date.now(), ...formData };
      setEmployees([...employees, newEmployee]);
    }
    setFormData({ name: "", email: "", role: "", status: "" });
    setEditIndex(null);
    setOpenModal(false);
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleDelete = (id, name) => {
  setEmployees(employees.filter((e) => e.id !== id));
  alert(`Employee "${name}" has been removed.`);
};


  return (
    <AdminLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Manage Employees
        </Header>

        <Card.Group itemsPerRow={3} stackable>
          <Card color="purple" header="Total Employees" meta={employees.length} />
          <Card
            color="green"
            header="Active"
            meta={employees.filter((e) => e.status === "Active").length}
          />
          <Card
            color="red"
            header="Inactive"
            meta={employees.filter((e) => e.status === "Inactive").length}
          />
        </Card.Group>

        <Button
          color="purple"
          icon
          labelPosition="left"
          onClick={() => setOpenModal(true)}
          style={{ marginTop: "1em" }}
        >
          <Icon name="plus" /> Add Employee
        </Button>

        <Table celled striped style={{ marginTop: "1em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map((emp, index) => (
              <Table.Row key={emp.id}>
                <Table.Cell>{emp.id}</Table.Cell>
                <Table.Cell>{emp.name}</Table.Cell>
                <Table.Cell>{emp.email}</Table.Cell>
                <Table.Cell>{emp.role}</Table.Cell>
                <Table.Cell>{emp.status}</Table.Cell>
                <Table.Cell>
                  <Button icon size="mini" onClick={() => handleEdit(index)}>
                    <Icon name="edit" />
                  </Button>
                  <Button
                    icon
                    size="mini"
                    color="red"
                    onClick={() => handleDelete(emp.id, emp.name)}
                  >
                    <Icon name="trash" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>

      <Modal open={openModal} onClose={() => setOpenModal(false)} size="tiny">
        <Modal.Header>{editIndex !== null ? "Update" : "Add New"} Employee</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Select
              label="Role"
              name="role"
              options={[
                { key: "admin", text: "Admin", value: "Admin" },
                { key: "employee", text: "Employee", value: "Employee" },
              ]}
              value={formData.role}
              onChange={handleChange}
            />
            <Form.Select
              label="Status"
              name="status"
              options={[
                { key: "active", text: "Active", value: "Active" },
                { key: "inactive", text: "Inactive", value: "Inactive" },
              ]}
              value={formData.status}
              onChange={handleChange}
            />
            <Button fluid color="purple" onClick={handleAddOrUpdateEmployee} style={{ marginTop: "1em" }}>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </AdminLayout>
  );
};

export default ManageEmployees;