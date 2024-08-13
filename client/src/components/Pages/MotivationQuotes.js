import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MotivationQuotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const motivationQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
    "The best way to predict the future is to create it. - Peter Drucker"
  ];

  const getNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % motivationQuotes.length);
  };

  return (
    <Container fluid className="bg-dark min-vh-100 text-light d-flex flex-column justify-content-center">
      <h1 className="text-center">Motivation Quotes</h1>

      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="quote-container">
            <p className="quote-text">{motivationQuotes[currentQuoteIndex]}</p>
            <Button variant="light" onClick={getNextQuote}>
              Next Quote
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MotivationQuotes;
