// src/components/employee/AssignedAssets.js
import React from "react";
import { Table, Header, Segment } from "semantic-ui-react";
import EmployeeLayout from "./EmployeeLayout";

const assignedAssets = [
  { id: 10001, name: "Laptop", category: "IT", assignedDate: "2023-06-15", status: "Active" },
  { id: 10002, name: "Chair", category: "Furniture", assignedDate: "2023-01-10", status: "Active" },
  { id: 10003, name: "Monitor", category: "IT", assignedDate: "2023-03-22", status: "Inactive" },
];

const AssignedAssets = () => {
  return (
    <EmployeeLayout>
      <Segment basic>
        <Header as="h2" color="purple">
          My Assigned Assets
        </Header>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Asset ID</Table.HeaderCell>
              <Table.HeaderCell>Asset Name</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Assigned Date</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {assignedAssets.map((asset) => (
              <Table.Row key={asset.id}>
                <Table.Cell>{asset.id}</Table.Cell>
                <Table.Cell>{asset.name}</Table.Cell>
                <Table.Cell>{asset.category}</Table.Cell>
                <Table.Cell>{asset.assignedDate}</Table.Cell>
                <Table.Cell>{asset.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </EmployeeLayout>
  );
};

export default AssignedAssets;
