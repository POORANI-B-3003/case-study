// src/pages/admin/ManageAssets.js
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
  Dropdown,
} from "semantic-ui-react";
import AdminLayout from "../../components/admin/AdminLayout";

const employeeOptions = [
  { key: 1, text: "Poorani", value: "Poorani" },
  { key: 2, text: "Ravi", value: "Ravi" },
  { key: 3, text: "Asha", value: "Asha" },
  { key: 4, text: "Vikram", value: "Vikram" },
  { key: 5, text: "Deepa", value: "Deepa" },
  { key: 6, text: "Kiran", value: "Kiran" },
];

const categoryOptions = [
  { key: "it", text: "IT", value: "IT" },
  { key: "furniture", text: "Furniture", value: "Furniture" },
  { key: "vehicle", text: "Vehicle", value: "Vehicle" },
  { key: "stationery", text: "Stationery", value: "Stationery" },
  { key: "electronics", text: "Electronics", value: "Electronics" },
  { key: "appliance", text: "Appliance", value: "Appliance" },
];

const ManageAssets = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [assets, setAssets] = useState([
    { id: 10001, name: "MacBook Pro", brand: "Apple", category: "Electronics", cost: 2500, purchaseDate: "2022-05-12", status: "Active", assignedTo: "Poorani" },
    { id: 10002, name: "Conference Table", brand: "UrbanLadder", category: "Furniture", cost: 850, purchaseDate: "2023-03-01", status: "Active", assignedTo: "Kiran" },
    { id: 10003, name: "Projector", brand: "BenQ", category: "Electronics", cost: 600, purchaseDate: "2021-12-18", status: "Inactive", assignedTo: "Asha" },
    { id: 10004, name: "Office Car", brand: "Hyundai", category: "Vehicle", cost: 15000, purchaseDate: "2024-02-09", status: "Active", assignedTo: "Deepa" },
    { id: 10005, name: "Whiteboard", brand: "Reynolds", category: "Stationery", cost: 120, purchaseDate: "2022-10-05", status: "Active", assignedTo: "Vikram" },
    { id: 10006, name: "Router", brand: "TP-Link", category: "IT", cost: 90, purchaseDate: "2023-07-11", status: "Inactive", assignedTo: "Ravi" },
    { id: 10007, name: "iPhone 13", brand: "Apple", category: "Electronics", cost: 1200, purchaseDate: "2023-08-28", status: "Active", assignedTo: "Poorani" },
  ]);

  const [formData, setFormData] = useState({
    id: 10008,
    name: "",
    brand: "",
    category: "",
    cost: "",
    purchaseDate: "",
    status: "",
    assignedTo: "",
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateAsset = () => {
    if (editIndex !== null) {
      const updatedAssets = [...assets];
      updatedAssets[editIndex] = formData;
      setAssets(updatedAssets);
    } else {
      setAssets([...assets, { ...formData, id: Date.now() }]);
    }
    setFormData({
      id: Date.now(),
      name: "",
      brand: "",
      category: "",
      cost: "",
      purchaseDate: "",
      status: "",
      assignedTo: "",
    });
    setEditIndex(null);
    setOpenModal(false);
  };

  const handleEdit = (index) => {
    setFormData(assets[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleDelete = (id, name) => {
  setAssets(assets.filter((a) => a.id !== id));
  alert(`Asset "${name}" has been deleted successfully.`);
};


  return (
    <AdminLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Manage Assets
        </Header>

        <Card.Group itemsPerRow={3} stackable>
          <Card color="purple" header="Total Assets" meta={assets.length} />
          <Card
            color="green"
            header="Active"
            meta={assets.filter((a) => a.status === "Active").length}
          />
          <Card
            color="red"
            header="Inactive"
            meta={assets.filter((a) => a.status === "Inactive").length}
          />
        </Card.Group>

        <Button
          color="purple"
          icon
          labelPosition="left"
          onClick={() => setOpenModal(true)}
          style={{ marginTop: "1em" }}
        >
          <Icon name="plus" /> Add Asset
        </Button>

        <Table celled striped style={{ marginTop: "1em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Assigned To</Table.HeaderCell>
              <Table.HeaderCell>Cost ($)</Table.HeaderCell>
              <Table.HeaderCell>Purchase Date</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {assets.map((asset, index) => (
              <Table.Row key={asset.id}>
                <Table.Cell>{asset.id}</Table.Cell>
                <Table.Cell>{asset.name}</Table.Cell>
                <Table.Cell>{asset.category}</Table.Cell>
                <Table.Cell>{asset.assignedTo}</Table.Cell>
                <Table.Cell>{asset.cost}</Table.Cell>
                <Table.Cell>{asset.purchaseDate}</Table.Cell>
                <Table.Cell>{asset.status}</Table.Cell>
                <Table.Cell>
                  <Button icon size="mini" onClick={() => handleEdit(index)}>
                    <Icon name="edit" />
                  </Button>
                  <Button icon size="mini" color="red" onClick={() => handleDelete(asset.id, asset.name)}>
                    <Icon name="trash" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>

      <Modal open={openModal} onClose={() => setOpenModal(false)} size="tiny">
        <Modal.Header>{editIndex !== null ? "Update" : "Add New"} Asset</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Asset Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Input
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
            <Form.Select
              label="Category"
              name="category"
              options={categoryOptions}
              value={formData.category}
              onChange={handleChange}
            />
            <Form.Input
              label="Cost Price ($)"
              name="cost"
              type="number"
              value={formData.cost}
              onChange={handleChange}
            />
            <Form.Input
              label="Purchase Date"
              name="purchaseDate"
              type="date"
              value={formData.purchaseDate}
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

            <Form.Select
              label="Assign to Employee"
              name="assignedTo"
              options={employeeOptions}
              value={formData.assignedTo}
              onChange={handleChange}
            />
            <Button fluid color="purple" onClick={handleAddOrUpdateAsset} style={{ marginTop: "1em" }}>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </AdminLayout>
  );
};

export default ManageAssets;