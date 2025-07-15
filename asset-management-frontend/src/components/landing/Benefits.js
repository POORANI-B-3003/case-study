import React, { useState } from "react";
import { Container, Header, Grid, Segment, Icon } from "semantic-ui-react";

const benefitData = [
  {
    title: "Improves Asset Life Cycle",
    description:
      "Track every stage of the asset journey—from procurement to retirement. Gain full control over asset performance.",
  },
  {
    title: "Maximize Asset Lifetime",
    description:
      "Perform preventive maintenance to extend equipment life and reduce capital replacement costs.",
  },
  {
    title: "Minimize Downtime and MTTR",
    description:
      "Detect issues early and fix them faster using real-time analytics and automation workflows.",
  },
  {
    title: "Increased Productivity",
    description:
      "Empower your team with a centralized platform, reducing time spent searching for asset details or paperwork.",
  },
  {
    title: "Eliminate Paperwork",
    description:
      "Digitize work orders, maintenance logs, and asset records to reduce manual errors and clutter.",
  },
  {
    title: "Reduces Maintenance Expenses",
    description:
      "Lower costs by minimizing emergency repairs, enabling predictive maintenance, and automating alerts.",
  },
];

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Segment vertical style={{ padding: "4em 0em", backgroundColor: "#fff" }}>
      <Container textAlign="center">
        <Header as="h2" style={{ color: "#6A1B9A", marginBottom: "1em" }}>
          What are the Benefits of Asset Hub Management Software
        </Header>
        <p style={{ fontSize: "1.1em", marginBottom: "2em" }}>
          Asset Hub Software is designed to transform how you manage your valuable assets. Optimize your entire asset life cycle and track maintenance proactively.
        </p>

        <Grid columns={3} stackable>
          {benefitData.map((benefit, index) => (
            <Grid.Column key={index}>
              <Segment
                onClick={() => handleToggle(index)}
                style={{
                  border: "1px solid #c084fc",
                  borderRadius: "10px",
                  cursor: "pointer",
                  padding: "1.5em",
                  textAlign: "left",
                  transition: "all 0.3s",
                }}
              >
                <Header as="h4" style={{ color: "#6A1B9A" }}>
                  <Icon name={activeIndex === index ? "minus" : "plus"} />
                  {benefit.title}
                </Header>
                {activeIndex === index && (
                  <p style={{ marginTop: "1em", color: "#555" }}>
                    {benefit.description}
                  </p>
                )}
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Segment>
  );
};

export default Benefits;
