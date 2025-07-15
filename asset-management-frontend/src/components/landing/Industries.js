import React from "react";
import { Container, Header, Grid, Icon, Segment } from "semantic-ui-react";

const industries = [
  { name: "Automotive", icon: "car" },
  { name: "Oil & Gas", icon: "fire" },
  { name: "Healthcare", icon: "heartbeat" },
  { name: "Manufacturing", icon: "industry" },
  { name: "Universities", icon: "university" },
  { name: "Utilities", icon: "lightbulb" },
];

const Industries = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#fff" }}>
      <Container textAlign="center">
        <Header as="h2" style={{ color: "#6A1B9A", marginBottom: "1em" }}>
          Industries We Serve
        </Header>

        <Grid columns={3} stackable textAlign="center" style={{ marginTop: "2em" }}>
          {industries.map((industry, idx) => (
            <Grid.Column key={idx} style={{ padding: "2em 1em" }}>
              <Icon name={industry.icon} size="huge" color="violet" />
              <Header as="h4" style={{ marginTop: "0.5em" }}>{industry.name}</Header>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Segment>
  );
};

export default Industries;
