import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unitSystem, setUnitSystem] = useState('metric');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const weightInKg = unitSystem === 'metric' ? parseFloat(weight) : parseFloat(weight) * 0.453592; // Convert to kg if using imperial
    const heightInM = unitSystem === 'metric' ? parseFloat(height) / 100 : parseFloat(height) * 0.0254; // Convert to meters if using imperial

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0 || weightInKg <= 0) {
      setBmiResult(null);
      return;
    }

    const bmi = weightInKg / (heightInM * heightInM);
    setBmiResult(bmi.toFixed(2));
  };

  const getBMIInterpretation = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBmiResult(null);
  };

  return (
    <div className="bg-dark text-light p-4" style={{ minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center">BMI Calculator</h1>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="unitSystem">
                <Form.Label>Unit System</Form.Label>
                <Form.Control
                  as="select"
                  value={unitSystem}
                  onChange={(e) => setUnitSystem(e.target.value)}
                  className="bg-dark text-light"
                >
                  <option value="metric">Metric (kg/cm)</option>
                  <option value="imperial">Imperial (lb/in)</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="weight">
                <Form.Label>Weight ({unitSystem === 'metric' ? 'kg' : 'lb'})</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={`Enter your weight in ${unitSystem === 'metric' ? 'kilograms' : 'pounds'}`}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-dark text-light"
                />
              </Form.Group>
              <Form.Group controlId="height">
                <Form.Label>Height ({unitSystem === 'metric' ? 'cm' : 'in'})</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={`Enter your height in ${unitSystem === 'metric' ? 'centimeters' : 'inches'}`}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-dark text-light"
                />
              </Form.Group>
              <Button variant="primary" onClick={calculateBMI}>
                Calculate BMI
              </Button>
              <Button variant="secondary" className="ms-2" onClick={clearForm}>
                Clear
              </Button>
            </Form>
            {bmiResult !== null && (
              <div className="mt-3">
                <h3 className="text-center">Your BMI: {bmiResult}</h3>
                <p className="text-center">Interpretation: {getBMIInterpretation(bmiResult)}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BMICalculator;
