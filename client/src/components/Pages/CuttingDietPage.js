import React from 'react';
import { Container, Table } from 'react-bootstrap';

const tableData2 = [
  {
    cat: 'Breakfast',
    name: 'Greek Yogurt, Berries, Almonds',
    qty: '1 cup, 1/2 cup, Handful'
  },
  {
    cat: 'Snack 1',
    name: 'Protein Bar, Apple',
    qty: '1 bar, 1 medium'
  },
  {
    cat: 'Lunch',
    name: 'Grilled Chicken Salad, Quinoa',
    qty: '6 oz, Mixed greens, 1 cup'
  },
  {
    cat: 'Snack 2',
    name: 'Vegetable Sticks with Hummus',
    qty: 'Carrot, Cucumber, 2 tbsp'
  },
  {
    cat: 'Dinner',
    name: 'Salmon, Steamed Vegetables',
    qty: '6 oz, 1 cup'
  }
];

export default function CuttingDietPage() {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Cutting Diet Plan</h1>

        <h2 className="text-center mt-4">Meal Plan</h2>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>Meal</th>
              <th>Food Items</th>
              <th>Portion Size</th>
            </tr>
          </thead>
          <tbody>
            {tableData2.map((item, index) => (
              <tr key={index}>
                <td>{item.cat}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2 className="text-center mt-4">Additional Tips</h2>
        <p className="text-center">
          - Stay hydrated by drinking plenty of water throughout the day.<br />
          - Include fiber-rich foods to help with satiety.<br />
          - Monitor calorie intake to create a calorie deficit for fat loss.<br />
          - Consult with a nutritionist or healthcare professional for personalized advice.
        </p>
      </Container>
    </div>
  );
}
