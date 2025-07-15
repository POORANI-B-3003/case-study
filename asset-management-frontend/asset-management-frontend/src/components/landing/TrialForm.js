import React, { useState } from "react";
import { Form, Segment, Header, Button } from "semantic-ui-react";

const TrialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e, { name, value }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
  };

  return (
    <Segment raised>
      <Header as="h3" color="purple" textAlign="center">
        Get Your FREE Asset Maintenance Software Trial Now!
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <Form.Input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <Button type="submit" fluid color="purple">
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default TrialForm;
