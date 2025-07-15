import React from "react";
import { Container, Header, Segment, Grid, Image } from "semantic-ui-react";
import eamImage from '../../assets/eam.png'

const EAMSection = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#f9f9ff" }}>
      <Container>
        <Header as="h2" style={{ color: "#6A1B9A", marginBottom: "2em" }}>
          Enterprise Asset Management (EAM)
        </Header>
        <Grid stackable columns={2} verticalAlign="middle">
          <Grid.Column width={10}>
            <p style={{ fontSize: "1.1em", lineHeight: "1.8em" }}>
              Enterprise Asset Management (EAM) is crucial for organizations that operate complex
              infrastructure and large volumes of physical assets. Asset Hub offers a centralized
              platform to manage all stages of the asset lifecycle—from acquisition to disposal.
              <br /><br />
              With features like predictive maintenance, cost tracking, and compliance automation,
              EAM helps businesses maximize performance, reduce operational costs, and improve
              asset reliability across departments and sites.
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src={eamImage} alt="Financial Management" size="large" centered />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default EAMSection;
