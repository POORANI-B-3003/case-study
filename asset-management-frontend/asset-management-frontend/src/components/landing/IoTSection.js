import React from "react";
import { Container, Header, Segment, Grid, Image } from "semantic-ui-react";
import iotImage from '../../assets/iot.png'
const IoTSection = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#ffffff" }}>
      <Container>
        <Header as="h2" style={{ color: "#6A1B9A", marginBottom: "2em" }}>
          IoT Meter Reading
        </Header>
        <Grid stackable columns={2} verticalAlign="middle">
          <Grid.Column>
            <Image src={iotImage} alt="Financial Management" size="large" centered />
          </Grid.Column>
          <Grid.Column>
            <p style={{ fontSize: "1.1em", lineHeight: "1.8em" }}>
              In traditional asset management, manual readings and routine inspections were common,
              leading to reactive practices and missed intervention opportunities.
              <br /><br />
              IoT Meter Reading changes this by continuously monitoring an asset’s critical
              parameters in real-time — such as temperature, torque, and rotor speed — through
              intelligent sensors. These readings allow the system to detect anomalies and trigger
              intelligent work orders proactively.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default IoTSection;
