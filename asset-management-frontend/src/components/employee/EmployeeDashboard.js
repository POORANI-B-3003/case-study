// src/components/employee/EmployeeDashboard.js
import React from "react";
import { Card, Header, Segment, Table } from "semantic-ui-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import EmployeeLayout from "./EmployeeLayout";

const requestData = [
  { month: "Jan", requests: 8 },
  { month: "Feb", requests: 11 },
  { month: "Mar", requests: 6 },
  { month: "Apr", requests: 13 },
  { month: "May", requests: 15 },
];

const recentRequests = [
  { employee: "Poorani", issue: "Monitor issue", status: "Pending" },
  { employee: "Ravi", issue: "Keyboard not working", status: "Resolved" },
  { employee: "Asha", issue: "Software installation", status: "In Progress" },
];

const EmployeeDashboard = () => {
  return (
    <EmployeeLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Welcome, Employee!
        </Header>

        {/* Summary Cards */}
        <Card.Group itemsPerRow={3} stackable>
          <Card color="purple" header="Assigned Assets" meta="5" />
          <Card color="teal" header="Total Requests Raised" meta="12" />
          <Card color="orange" header="Resolved Requests" meta="7" />
        </Card.Group>

        <br />

        {/* Monthly Request Chart */}
        <Segment raised>
          <Header as="h4" color="purple">Monthly Service Requests</Header>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={requestData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="requests" stroke="#6A1B9A" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </Segment>

        {/* Recent Requests Table */}
        <Segment raised>
          <Header as="h4" color="purple">Recent Service Requests</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Employee</Table.HeaderCell>
                <Table.HeaderCell>Issue</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {recentRequests.map((req, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell>{req.employee}</Table.Cell>
                  <Table.Cell>{req.issue}</Table.Cell>
                  <Table.Cell>{req.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      </Segment>
    </EmployeeLayout>
  );
};

export default EmployeeDashboard;
