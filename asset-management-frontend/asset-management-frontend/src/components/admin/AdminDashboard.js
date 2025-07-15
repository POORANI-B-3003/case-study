// src/pages/admin/AdminDashboard.js
import React, { useEffect, useState } from "react";
import {
  Header,
  Segment,
  Grid,
  Table,
  Card,
  Icon,
  Divider
} from "semantic-ui-react";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Mock Data
const stats = {
  assets: 120,
  employees: 45,
  requests: 12,
  value: "₹25.6L",
};

const chartData = [
  { month: "Jan", requests: 10 },
  { month: "Feb", requests: 15 },
  { month: "Mar", requests: 7 },
  { month: "Apr", requests: 18 },
  { month: "May", requests: 22 },
];

const requestData = [
  { id: 1, employee: "John Doe", issue: "Computer not working", status: "Pending" },
  { id: 2, employee: "Jane Smith", issue: "AC repair", status: "Resolved" },
  { id: 3, employee: "Mike", issue: "Printer jam", status: "In Progress" },
];

const adminName = localStorage.getItem("adminName") || "Admin";

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("adminName") || "Admin";
    setAdminName(name);
  }, []);

  return (
    <AdminLayout>
      <div style={{ padding: "2em" }}>
        <Header as="h2" color="purple">
          Welcome, {adminName}!
        </Header>

        {/* Cards */}
        <Card.Group itemsPerRow={4} stackable>
          <Card raised color="purple">
            <Card.Content textAlign="center">
              <Icon name="boxes" size="huge" color="purple" />
              <Card.Header style={{ marginTop: "1em" }}>{stats.assets}</Card.Header>
              <Card.Meta>Total Assets</Card.Meta>
            </Card.Content>
          </Card>

          <Card raised color="teal">
            <Card.Content textAlign="center">
              <Icon name="users" size="huge" color="teal" />
              <Card.Header style={{ marginTop: "1em" }}>{stats.employees}</Card.Header>
              <Card.Meta>Employees</Card.Meta>
            </Card.Content>
          </Card>

          <Card raised color="orange">
            <Card.Content textAlign="center">
              <Icon name="wrench" size="huge" color="orange" />
              <Card.Header style={{ marginTop: "1em" }}>{stats.requests}</Card.Header>
              <Card.Meta>Service Requests</Card.Meta>
            </Card.Content>
          </Card>

          <Card raised color="green">
            <Card.Content textAlign="center">
              <Icon name="rupee" size="huge" color="green" />
              <Card.Header style={{ marginTop: "1em" }}>{stats.value}</Card.Header>
              <Card.Meta>Total Asset Value</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>

      

        {/* Chart */}
        <Segment raised>
          <Header as="h3" color="purple">Monthly Service Requests</Header>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="requests" stroke="#6A1B9A" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Segment>

        {/* Table */}
        <Segment raised>
          <Header as="h3" color="purple">Recent Service Requests</Header>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Employee</Table.HeaderCell>
                <Table.HeaderCell>Issue</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {requestData.map((req) => (
                <Table.Row key={req.id}>
                  <Table.Cell>{req.employee}</Table.Cell>
                  <Table.Cell>{req.issue}</Table.Cell>
                  <Table.Cell>{req.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
