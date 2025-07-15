import React from "react";
import { Grid, Container, Header, Segment } from "semantic-ui-react";
import TrialForm from "./TrialForm";

const HeroBanner = () => {
  return (
    <Segment vertical style={{ padding: "1em 0em", backgroundColor: "#f9f9ff" }}>
      <Container>
        <Grid stackable columns={2} verticalAlign="middle">
          <Grid.Column>
            <Header as="h1" style={{ color: "#6A1B9A", fontSize: "2.5em" }}>
              Asset Maintenance Management Software
            </Header>
            <p style={{ fontSize: "1.2em", marginTop: "1em" }}>
              Tired of reactive maintenance, unexpected downtime and increasing unexpected costs?
              Take control with Asset Hub. Streamline maintenance, optimize your asset life cycle,
              and maximize ROI.
            </p>
          </Grid.Column>

          <Grid.Column>
            <TrialForm />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default HeroBanner;
