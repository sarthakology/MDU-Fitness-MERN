import React from 'react';
import { Container, Table } from 'react-bootstrap';

const tableData3 = [
  {
    cat: 'Breakfast',
    name: 'Egg White Omelette, Spinach, Whole Grain Toast',
    qty: '4 egg whites, Handful, 2 slices'
  },
  {
    cat: 'Snack 1',
    name: 'Greek Yogurt, Mixed Berries, Almonds',
    qty: '1 cup, 1/2 cup, Handful'
  },
  {
    cat: 'Lunch',
    name: 'Grilled Chicken Breast, Quinoa, Broccoli',
    qty: '6 oz, 1 cup, 1 cup'
  },
  {
    cat: 'Snack 2',
    name: 'Protein Smoothie, Rice Cakes with Peanut Butter',
    qty: '1 scoop, 2 cakes, 2 tbsp'
  },
  {
    cat: 'Dinner',
    name: 'Salmon, Sweet Potatoes, Asparagus',
    qty: '6 oz, 1 medium, 1 cup'
  }
];

export default function LeanBulkDietPage() {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Lean Bulking Diet Plan</h1>

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
            {tableData3.map((item, index) => (
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
          - Consume lean protein sources for muscle building.<br />
          - Include complex carbohydrates and healthy fats in your meals.<br />
          - Monitor your progress and adjust your calorie intake as needed.<br />
          - Consult with a nutritionist or healthcare professional for personalized advice.
        </p>
      </Container>
    </div>
  );
}
