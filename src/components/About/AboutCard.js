import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ANKUSH BANERJEE </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am pursuing my B.Tech in Computer Science and Engineering
            from techno main salt lake.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            I love to build new things make life easier{" "}
          </p>
          <footer className="blockquote-footer">Ankush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
