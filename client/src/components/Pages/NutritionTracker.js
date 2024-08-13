import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const NutritionTracker = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [nutritionLogs, setNutritionLogs] = useState([]);

  const addFoodItem = () => {
    if (foodName && quantity && calories) {
      const newFoodItem = {
        foodName,
        quantity,
        calories
      };

      setNutritionLogs([...nutritionLogs, newFoodItem]);
      // Clear form fields
      setFoodName('');
      setQuantity('');
      setCalories('');
    }
  };

  return (
    <Container fluid className="bg-dark text-light p-4"> {/* Add fluid to make the container full width */}
      <h1 className="text-center">Nutrition Tracker</h1>

      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="foodName">
              <Form.Label>Food Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter food item name"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="calories">
              <Form.Label>Calories</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="bg-dark text-light"
              />
            </Form.Group>

            <Button variant="primary" onClick={addFoodItem}>
              Add Food Item
            </Button>
          </Form>

          {nutritionLogs.length > 0 && (
            <div className="mt-3">
              <h3 className="text-center">Logged Food Items</h3>
              <ListGroup>
                {nutritionLogs.map((foodItem, index) => (
                  <ListGroup.Item key={index} className="bg-dark text-light">
                    <strong>{foodItem.foodName}</strong> - Quantity: {foodItem.quantity}, Calories: {foodItem.calories}
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


    </Container>
  );
};


export default NutritionTracker;
