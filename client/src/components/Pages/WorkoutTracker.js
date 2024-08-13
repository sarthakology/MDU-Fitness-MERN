// WorkoutTracker.js

import React, { useState } from 'react';
import { Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const WorkoutTracker = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const addExercise = () => {
    if (exercise && sets && reps && weight) {
      const newExercise = {
        exercise,
        sets,
        reps,
        weight
      };

      setWorkouts([...workouts, newExercise]);
      // Clear form fields
      setExercise('');
      setSets('');
      setReps('');
      setWeight('');
    }
  };

  return (
    <div className="bg-dark text-light p-4">
      <h1 className="text-center">Workout Tracker</h1>

      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="exercise">
              <Form.Label>Exercise</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter exercise name"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="sets">
              <Form.Label>Sets</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="reps">
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="weight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter weight lifted"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Button variant="primary" onClick={addExercise}>
              Add Exercise
            </Button>
          </Form>

          {workouts.length > 0 && (
            <div className="mt-3">
              <h3 className="text-center">Logged Exercises</h3>
              <ListGroup>
                {workouts.map((exercise, index) => (
                  <ListGroup.Item key={index} className="bg-dark text-light">
                    <strong>{exercise.exercise}</strong> - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight} kg
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default WorkoutTracker;
