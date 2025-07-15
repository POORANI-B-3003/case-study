
// src/components/employee/RequestStatus.js
import React from "react";
import { Header, Segment, Table, Label } from "semantic-ui-react";
import EmployeeLayout from "./EmployeeLayout";

const requests = [
  { asset: "Laptop", issue: "Keyboard not working", status: "Pending" },
  { asset: "Monitor", issue: "Screen flickering", status: "Resolved" },
  { asset: "Printer", issue: "Paper jam", status: "In Progress" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Resolved":
      return "green";
    case "In Progress":
      return "orange";
    default:
      return "red";
  }
};

const RequestStatus = () => {
  return (
    <EmployeeLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          Service Request Status
        </Header>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Asset</Table.HeaderCell>
              <Table.HeaderCell>Issue</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {requests.map((req, index) => (
              <Table.Row key={index}>
                <Table.Cell>{req.asset}</Table.Cell>
                <Table.Cell>{req.issue}</Table.Cell>
                <Table.Cell>
                  <Label color={getStatusColor(req.status)}>{req.status}</Label>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </EmployeeLayout>
  );
};

export default RequestStatus;
