import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomeWorkoutsPage = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Home Workouts</h1>

        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Full Body HIIT</Card.Title>
                <Card.Text>
                  Perform each exercise for 45 seconds, rest for 15 seconds between exercises. Repeat for 3 rounds.
                  <ul>
                    <li>Jumping Jacks</li>
                    <li>Bodyweight Squats</li>
                    <li>Push-ups</li>
                    <li>Plank</li>
                    <li>Lunges</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Core Blast</Card.Title>
                <Card.Text>
                  Perform each exercise for 30 seconds, rest for 15 seconds between exercises. Repeat for 4 rounds.
                  <ul>
                    <li>Mountain Climbers</li>
                    <li>Russian Twists</li>
                    <li>Leg Raises</li>
                    <li>Plank with Shoulder Taps</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Cardio Burn</Card.Title>
                <Card.Text>
                  Perform each exercise for 1 minute, rest for 30 seconds between exercises. Repeat for 3 rounds.
                  <ul>
                    <li>High Knees</li>
                    <li>Burpees</li>
                    <li>Jumping Lunges</li>
                    <li>Box Jumps (use a sturdy surface)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>Yoga Flow</Card.Title>
                <Card.Text>
                  Follow a gentle yoga flow for flexibility and relaxation. Include poses like Downward Dog, Warrior series, and Child's Pose.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeWorkoutsPage;
