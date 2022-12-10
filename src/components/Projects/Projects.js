import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Ankush109/ADAT_FINAL_APP/main/screenshots/mainp.jpeg"
              isBlog={false}
              title="E-commerce App"
              description="
This is a full stack project,the frontend part is made with the help of React js and the backend is made with node js and for database i have used mongodb database for its simple to use and configure and as for state management i have used react-redux.

If you want to know the details ,here is my github repo link where i have explained every functionality of this applicaiton in details with images."
              ghLink="https://github.com/Ankush109/ADAT_FINAL_APP"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Ankush109/MERN_stack_chatapp/main/screenshots/lifedemo.jpeg"
              isBlog={false}
              title="Chatify"
              description="
This is MERN stack web applicaiton which i have developed to test my tech stack with react js as frontend and mongodb and node js as backend part , i have used web sockets to achieve real time messaging features like whatsapp has and one can create group , all the message will be stored in the database which is mongodb atlas,it also has notificaiton badge which shows if anyone send you any message."
              ghLink="https://github.com/Ankush109/MERN_stack_chatapp"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Ankush109/OpenAI/main/images/open-AI.png"
              isBlog={false}
              title="Open-AI Image Generator"
              description="Open AI image generator which uses the Open-AI Api to generate image from text you type ."
              ghLink="https://github.com/Ankush109/OpenAI"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Ankush109/Travigo/main/frontend/src/Components/images/Screenshot_20221211_012429.png"
              isBlog={false}
              title="Travigo"
              description="Travigo is a travel bloggin web application where user can post their travel experiences"
              ghLink="https://github.com/Ankush109/Travigo"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
