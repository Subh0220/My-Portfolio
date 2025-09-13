import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subhasree Sahu </span>
            from <span className="purple"> Berhampur, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science and
            Engineering at BPUT.
            <br />
            I am also an aspiring full-stack developer with a strong interest in
            Artificial Intelligence and Machine Learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading & Exploring Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing Creative Web Interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Subhasree</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
