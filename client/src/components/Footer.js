import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: thesarthakchauhan.com</p>
            <p>Phone: +91 9821823744</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/home" className="text-light">Home</Link></li>
              <li><Link to="/HomeWorkoutsPage" className="text-light">Workouts</Link></li>
              <li><Link to="/NutritionTracker" className="text-light">Nutrition</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light">facebook</a><br />
              <a href="https://twitter.com" className="text-light">twitter</a><br />
              <a href="https://instagram.com" className="text-light">instagram</a>
              {/* Add more social media icons as needed */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>&copy; 2024 Gym App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
