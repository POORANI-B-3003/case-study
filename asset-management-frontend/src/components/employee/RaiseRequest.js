// src/components/employee/RaiseRequest.js
import React, { useState } from "react";
import { Button, Form, Header, Segment, Dropdown, TextArea } from "semantic-ui-react";
import EmployeeLayout from "./EmployeeLayout";

const assets = [
  { key: "laptop", text: "Laptop", value: "Laptop" },
  { key: "monitor", text: "Monitor", value: "Monitor" },
  { key: "printer", text: "Printer", value: "Printer" },
];

const RaiseRequest = () => {
  const [formData, setFormData] = useState({ asset: "", issue: "" });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert(`Request raised for ${formData.asset}: ${formData.issue}`);
    setFormData({ asset: "", issue: "" });
  };

  return (
    <EmployeeLayout>
      <Segment padded="very">
        <Header as="h2" color="purple">
          Raise Service Request
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Asset</label>
            <Dropdown
              placeholder="Select Asset"
              fluid
              selection
              options={assets}
              name="asset"
              value={formData.asset}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Issue Description</label>
            <TextArea
              placeholder="Describe the issue"
              name="issue"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            />
          </Form.Field>
          <Button color="purple" type="submit">Submit Request</Button>
        </Form>
      </Segment>
    </EmployeeLayout>
  );
};

export default RaiseRequest;