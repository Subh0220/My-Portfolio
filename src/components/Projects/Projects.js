import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import movie from "../../Assets/Projects/movie.png";
import cricket from "../../Assets/Projects/cricket.png";
import story from "../../Assets/Projects/story.png";
import aiAssistant from "../../Assets/Projects/ai_assistant.png";
import login from "../../Assets/Projects/login.png";
import todo from "../../Assets/Projects/todo.png";
import weather from "../../Assets/Projects/weather.png";

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
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator GUI"
              description="A GUI-based calculator application developed in Java for basic arithmetic operations."
              ghLink="https://github.com/Subh0220/SimpleCalculatorGUI"
              //demoLink="https://chatify-49.web.app/"//
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Fan Page"
              description="A fun fan page showcasing favorite movies with images, details, and responsive design."
              ghLink="https://github.com/Subh0220/Movie-Fan-Page"
              //demoLink="https://blogs.soumya-jit.tech/"//
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricket}
              isBlog={false}
              title="Cricket Star Showcase"
              description="A showcase website dedicated to cricket stars with stats, images, and interactive sections."
              ghLink="https://github.com/Subh0220/Cricket-Star-Showcase"
              //demoLink="https://editor.soumya-jit.tech/"//              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={story}
              isBlog={false}
              title="Story Idea Generator"
              description="A random story idea generator built with Python to help writers spark creativity."
              ghLink="https://github.com/Subh0220/Story-Idea-Generator"
              //demoLink="https://plant49-ai.herokuapp.com/"//
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiAssistant}
              isBlog={false}
              title="My AI Assistant"
              description="A personal AI assistant built with Python that can perform tasks like answering questions, opening apps, and more."
              ghLink="https://github.com/Subh0220/My_AI_Assistant"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="My Login Page"
              description="A custom login page built with HTML, CSS, and JavaScript featuring authentication UI design."
              ghLink="https://github.com/Subh0220/My-Login-Page"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="A simple to-do list app to manage tasks with add, delete, and mark-as-done functionality."
              ghLink="https://github.com/Subh0220/To-Do-List"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="A weather app that fetches real-time weather updates using APIs with a neat UI."
              ghLink="https://github.com/Subh0220/Weather-Forecast"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
