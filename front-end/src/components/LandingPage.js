import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="landing-page">
      <Row>
        <Col>
          <h1>Welcome to the Admin Panel</h1>
          <p>This is the landing page of the admin panel.</p>
          <div className="buttons">
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="secondary">Register</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
