import React from "react";
import { Container, Header, Image, Grid, Segment } from "semantic-ui-react";

import logo0 from "../../assets/logo0.jpg";
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";

const logos = [logo0, logo1, logo2, logo3, logo4, logo5];

const Logos = () => {
  return (
    <Segment vertical style={{ padding: "4em 0", backgroundColor: "#fefaff" }}>
      <Container textAlign="center">
        <Header as="h3" style={{ color: "#6A1B9A", marginBottom: "2em" }}>
          Trusted By Industry Leaders
        </Header>
        <Grid columns={6} stackable textAlign="center">
          {logos.map((src, idx) => (
            <Grid.Column key={idx}>
              <div
                style={{
                  width: "150px",
                  height: "80px",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                }}
              >
                <Image src={src} alt={`Logo ${idx}`} style={{ maxWidth: "100%", maxHeight: "60px" }} />
              </div>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Segment>
  );
};

export default Logos;
