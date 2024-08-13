import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FlexibilityMobilityPage = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Flexibility and Mobility Workouts</h1>

        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Dynamic Stretching</Card.Title>
                <Card.Text>
                  Dynamic stretches involve controlled, smooth movements to increase flexibility and improve range of motion. Incorporate leg swings and arm circles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Yoga Poses</Card.Title>
                <Card.Text>
                  Yoga poses help improve flexibility and balance. Include poses like Downward Dog, Warrior, and Child's Pose in your routine.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Foam Rolling</Card.Title>
                <Card.Text>
                  Foam rolling helps release muscle tightness and improve flexibility. Target areas like your calves, hamstrings, and back.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Joint Mobility Exercises</Card.Title>
                <Card.Text>
                  Perform joint mobility exercises to enhance the range of motion in your joints. Include exercises for wrists, ankles, and shoulders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlexibilityMobilityPage;
