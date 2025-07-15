// src/pages/admin/ManageCategories.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  Segment,
  Button,
  Modal,
  Form,
  Table,
  Icon,
  Card,
  Message,
} from "semantic-ui-react";
import AdminLayout from "../../components/admin/AdminLayout";

const API_URL = "http://localhost:8080/api/categories";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // Fetch all categories on load
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(API_URL);
      setCategories(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch categories");
    }
  };

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateCategory = async () => {
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }

      setFormData({ name: "", description: "" });
      setEditId(null);
      setOpenModal(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
      setError("Failed to submit category");
    }
  };

  const handleEdit = (category) => {
    setFormData({ name: category.name, description: category.description });
    setEditId(category.id);
    setOpenModal(true);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure to delete category "${name}"?`)) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchCategories();
      } catch (err) {
        console.error(err);
        setError("Failed to delete category");
      }
    }
  };

  return (
    <AdminLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Manage Categories
        </Header>

        {error && <Message negative>{error}</Message>}

        <Card.Group itemsPerRow={2} stackable>
          <Card color="purple" header="Total Categories" meta={categories.length} />
        </Card.Group>

        <Button
          color="purple"
          icon
          labelPosition="left"
          onClick={() => {
            setFormData({ name: "", description: "" });
            setEditId(null);
            setOpenModal(true);
          }}
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
            {categories.map((cat) => (
              <Table.Row key={cat.id}>
                <Table.Cell>{cat.id}</Table.Cell>
                <Table.Cell>{cat.name}</Table.Cell>
                <Table.Cell>{cat.description}</Table.Cell>
                <Table.Cell>
                  <Button icon size="mini" onClick={() => handleEdit(cat)}>
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
        <Modal.Header>{editId ? "Update Category" : "Add New Category"}</Modal.Header>
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
            <Button
              fluid
              color="purple"
              onClick={handleAddOrUpdateCategory}
              style={{ marginTop: "1em" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </AdminLayout>
  );
};

export default ManageCategories;
