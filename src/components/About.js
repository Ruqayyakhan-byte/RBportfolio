import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className='container-fluid'
    style={{backgroundColor:'black',minHeight:'100vh',padding:'20px'}}>
    <Container style={{ backgroundColor: '#1d5463', color: 'black',minHeight:'50vh', borderRadius: '8px' }}>
      <h1>About Me</h1>
      <Row className="mt-4">
        <Col md={4} className="text-center">
          <h3>Web Development</h3>
          <p>
            I specialize in building responsive and efficient web applications using modern technologies like React, Bootstrap, and JavaScript.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Frontend Design</h3>
          <p>
            With a keen eye for design, I ensure that every project I work on is not only functional but also visually appealing.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Project Management</h3>
          <p>
            I have experience in managing projects from conception to deployment, ensuring that they meet client requirements and deadlines.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
