import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StrengthTrainingPage = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Strength Training Workout</h1>

        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Deadlifts</Card.Title>
                <Card.Text>
                  Deadlifts work multiple muscle groups, including your back, glutes, and hamstrings. Ensure proper form to prevent injury.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Bench Press</Card.Title>
                <Card.Text>
                  The bench press targets your chest, shoulders, and triceps. Use a spotter when lifting heavy weights to ensure safety.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Squats</Card.Title>
                <Card.Text>
                  Squats are excellent for building leg strength. Keep your back straight and knees in line with your toes during the movement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Overhead Press</Card.Title>
                <Card.Text>
                  Overhead press targets your shoulders and upper back. Use a controlled motion and avoid arching your back excessively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StrengthTrainingPage;
