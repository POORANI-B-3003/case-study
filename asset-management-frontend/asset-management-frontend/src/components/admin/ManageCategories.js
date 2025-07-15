// src/pages/admin/ManageCategories.js
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

const ManageCategories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [categories, setCategories] = useState([
    { id: 1, name: "IT", description: "Information Technology assets" },
    { id: 2, name: "Furniture", description: "Office furniture and fixtures" },
    { id: 3, name: "Stationery", description: "Office supplies and stationery" },
  ]);

  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateCategory = () => {
    if (editIndex !== null) {
      const updated = [...categories];
      updated[editIndex] = { ...updated[editIndex], ...formData };
      setCategories(updated);
    } else {
      const newCategory = { id: Date.now(), ...formData };
      setCategories([...categories, newCategory]);
    }
    setFormData({ name: "", description: "" });
    setEditIndex(null);
    setOpenModal(false);
  };

  const handleEdit = (index) => {
    setFormData(categories[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleDelete = (id, name) => {
  setCategories(categories.filter((c) => c.id !== id));
  alert(`Category "${name}" has been deleted.`);
};


  return (
    <AdminLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Manage Categories
        </Header>

        <Card.Group itemsPerRow={2} stackable>
          <Card color="purple" header="Total Categories" meta={categories.length} />
        </Card.Group>

        <Button
          color="purple"
          icon
          labelPosition="left"
          onClick={() => setOpenModal(true)}
          style={{ marginTop: "1em" }}
        >
          <Icon name="plus" /> Add Category
        </Button>

        <Table celled striped style={{ marginTop: "1em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {categories.map((cat, index) => (
              <Table.Row key={cat.id}>
                <Table.Cell>{cat.id}</Table.Cell>
                <Table.Cell>{cat.name}</Table.Cell>
                <Table.Cell>{cat.description}</Table.Cell>
                <Table.Cell>
                  <Button icon size="mini" onClick={() => handleEdit(index)}>
                    <Icon name="edit" />
                  </Button>
                  <Button
                    icon
                    size="mini"
                    color="red"
                    onClick={() => handleDelete(cat.id, cat.name)}
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
        <Modal.Header>{editIndex !== null ? "Update" : "Add New"} Category</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Category Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Input
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Button fluid color="purple" onClick={handleAddOrUpdateCategory} style={{ marginTop: "1em" }}>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </AdminLayout>
  );
};

export default ManageCategories;
