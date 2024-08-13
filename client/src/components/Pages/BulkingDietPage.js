import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const tableData = [
  {
    cat: 'breakfast1',
    name: 'Oatmeal, Eggs, Whole Wheat Toast, Banana',
    qty: '1 cup, 2 eggs, 2 slices, 1 medium'
  },
  {
    cat: 'breakfast2',
    name: 'Oatmeal, Eggs, Whole Wheat Toast, Banana',
    qty: '1 cup, 2 eggs, 2 slices, 1 medium'
  },
  {
    cat: 'breakfast3',
    name: 'Oatmeal, Eggs, Whole Wheat Toast, Banana',
    qty: '1 cup, 2 eggs, 2 slices, 1 medium'
  }
]

export default function BulkingDietPage() {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Bulking Diet Plan</h1>

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
            {tableData?.map((item, key) => (
              <tr key={key}>
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
          - Include a variety of vegetables and fruits in your meals for added nutrients.<br />
          - Adjust portion sizes based on your individual caloric needs and goals.<br />
          - Consult with a nutritionist or healthcare professional for personalized advice.
        </p>
      </Container>
    </div>
  );
}
