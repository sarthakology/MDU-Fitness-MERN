import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CrossFitWorkoutsPage = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">CrossFit Workouts</h1>

        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>WOD 1: Fran</Card.Title>
                <Card.Text>
                  21-15-9 reps for time of Thrusters (95 lbs) and Pull-ups. A classic CrossFit benchmark workout.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>WOD 2: Cindy</Card.Title>
                <Card.Text>
                  As many rounds as possible (AMRAP) in 20 minutes of 5 Pull-ups, 10 Push-ups, and 15 Air Squats.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>WOD 3: Grace</Card.Title>
                <Card.Text>
                  For time: 30 Clean and Jerks (135 lbs). Move through the reps as quickly as possible with good form.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>WOD 4: Murph</Card.Title>
                <Card.Text>
                  For time: 1-mile run, 100 Pull-ups, 200 Push-ups, 300 Air Squats, 1-mile run. Partition the pull-ups, push-ups, and squats as needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CrossFitWorkoutsPage;
