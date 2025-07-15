import React from "react";
import { Container, Header, Segment, Grid, Image } from "semantic-ui-react";
import featureImage from "../../assets/feature.png";

const Features = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#fefaff" }}>
      <Container>
        <Header as="h2" textAlign="center" style={{ color: "#6A1B9A" }}>
          What are the Features of Asset Hub’s Asset Management Software
        </Header>
        <p style={{ textAlign: "center", fontSize: "1.1em", marginBottom: "2em" }}>
          Asset Hub’s Asset Management Software Solution empowers your maintenance team to perform
          at their best. Reduce maintenance costs, improve productivity, and optimize operations.
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold", color: "#7e57c2", marginBottom: "3em" }}>
          Explore All Features &gt;
        </p>

        <Grid stackable columns={2} verticalAlign="middle">
          <Grid.Column width={8}>
            <Image src={featureImage} alt="Financial Management" size="large" centered />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ color: "#6A1B9A" }}>
              Financial Management
            </Header>
            <p style={{ fontSize: "1.1em" }}>
              With Asset Hub, track spending, reduce downtime costs, and forecast asset expenses
              across your organization. Our platform helps streamline financial tracking and
              reporting for all your equipment.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Features;
