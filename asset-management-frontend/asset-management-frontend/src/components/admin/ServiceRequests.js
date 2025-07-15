// src/pages/admin/ServiceRequests.js
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

const ServiceRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, asset: "Printer", requestedBy: "Ravi", issue: "Paper jam", date: "2024-06-10", status: "Pending" },
    { id: 2, asset: "Laptop", requestedBy: "Asha", issue: "Battery issue", date: "2024-07-01", status: "Resolved" },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    asset: "",
    requestedBy: "",
    issue: "",
    date: "",
    status: "Pending",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...requests];
      updated[editIndex] = { ...updated[editIndex], ...formData };
      setRequests(updated);
    } else {
      const newRequest = { id: Date.now(), ...formData };
      setRequests([...requests, newRequest]);
    }
    setFormData({ asset: "", requestedBy: "", issue: "", date: "", status: "Pending" });
    setEditIndex(null);
    setOpenModal(false);
  };

  const handleEdit = (index) => {
    setFormData(requests[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleDelete = (id, requestTitle) => {
  setRequests(requests.filter((r) => r.id !== id));
  alert(`Request "${requestTitle}" has been deleted.`);
};


  return (
    <AdminLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Service Requests
        </Header>

        <Card.Group itemsPerRow={3}>
          <Card color="purple" header="Total Requests" meta={requests.length} />
          <Card
            color="yellow"
            header="Pending"
            meta={requests.filter((r) => r.status === "Pending").length}
          />
          <Card
            color="green"
            header="Resolved"
            meta={requests.filter((r) => r.status === "Resolved").length}
          />
        </Card.Group>

        <Button
          color="purple"
          icon
          labelPosition="left"
          style={{ marginTop: "1em" }}
          onClick={() => setOpenModal(true)}
        >
          <Icon name="plus" /> Add Request
        </Button>

        <Table celled striped style={{ marginTop: "1em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Asset</Table.HeaderCell>
              <Table.HeaderCell>Requested By</Table.HeaderCell>
              <Table.HeaderCell>Issue</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {requests.map((req, index) => (
              <Table.Row key={req.id}>
                <Table.Cell>{req.id}</Table.Cell>
                <Table.Cell>{req.asset}</Table.Cell>
                <Table.Cell>{req.requestedBy}</Table.Cell>
                <Table.Cell>{req.issue}</Table.Cell>
                <Table.Cell>{req.date}</Table.Cell>
                <Table.Cell>{req.status}</Table.Cell>
                <Table.Cell>
                  <Button icon size="mini" onClick={() => handleEdit(index)}>
                    <Icon name="edit" />
                  </Button>
                  <Button
                    icon
                    size="mini"
                    color="red"
                    onClick={() => handleDelete(req.id, req.title)}
                  >
                    <Icon name="trash" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>

      {/* Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} size="tiny">
        <Modal.Header>{editIndex !== null ? "Update" : "Add New"} Request</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label="Asset"
              name="asset"
              value={formData.asset}
              onChange={handleChange}
            />
            <Form.Input
              label="Requested By"
              name="requestedBy"
              value={formData.requestedBy}
              onChange={handleChange}
            />
            <Form.Input
              label="Issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
            />
            <Form.Input
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
            <Form.Select
              label="Status"
              name="status"
              options={[
                { key: "pending", text: "Pending", value: "Pending" },
                { key: "resolved", text: "Resolved", value: "Resolved" },
              ]}
              value={formData.status}
              onChange={handleChange}
            />
            <Button color="purple" fluid onClick={handleAddOrUpdate} style={{ marginTop: "1em" }}>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </AdminLayout>
  );
};

export default ServiceRequests;
