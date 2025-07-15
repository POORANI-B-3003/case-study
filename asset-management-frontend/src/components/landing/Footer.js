import React from "react";
import { Container, Grid, Segment, Header, List, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#1b1c1d", color: "#fff" }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header as="h3" style={{ color: "#C084FC" }}>Asset Hub</Header>
              <p>
                A modern platform for managing assets, maintenance, and lifecycle planning.
                Stay organized and maximize ROI.
              </p>
            </Grid.Column>

            <Grid.Column width={5}>
              <Header as="h4" style={{ color: "#fff" }}>Quick Links</Header>
              <List link inverted>
                <List.Item as="a">Solutions</List.Item>
                <List.Item as="a">Features</List.Item>
                <List.Item as="a">Industries</List.Item>
                <List.Item as="a">Contact</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={5}>
              <Header as="h4" style={{ color: "#fff" }}>Follow Us</Header>
              <List horizontal link inverted>
                <List.Item as="a" href="#">
                  <Icon name="facebook f" size="large" />
                </List.Item>
                <List.Item as="a" href="#">
                  <Icon name="twitter" size="large" />
                </List.Item>
                <List.Item as="a" href="#">
                  <Icon name="linkedin" size="large" />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
