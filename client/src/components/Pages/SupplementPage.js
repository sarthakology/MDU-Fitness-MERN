import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const supplementsData = [
  {
    id: 1,
    name: 'Whey Protein',
    description: 'A high-quality protein source that is quickly absorbed by the body. It is rich in essential amino acids, making it an ideal supplement for muscle building and recovery.',
    benefits: ['Muscle building', 'Enhanced recovery', 'Convenient source of protein']
  },
  {
    id: 2,
    name: 'Creatine Monohydrate',
    description: 'A compound that helps the body produce energy during high-intensity exercise. It is known for its role in improving strength, power, and muscle mass.',
    benefits: ['Increased strength', 'Improved exercise performance', 'Muscle volumization']
  },
  {
    id: 3,
    name: 'Omega-3 Fatty Acids',
    description: 'Essential fatty acids that play a crucial role in brain health, heart health, and inflammation reduction. They are commonly found in fish oil supplements.',
    benefits: ['Heart health', 'Brain function', 'Anti-inflammatory effects']
  },
  {
    id: 4,
    name: "Multivitamin",
    description: "A multivitamin is a supplement that contains a combination of vitamins and minerals. It is designed to provide essential nutrients that may be lacking in a person's diet.",
    benefits: ["Supports overall health", "Fills nutritional gaps", "Boosts immune system"]
  },
  {
    id: 5,
    name: "BCAA (Branched-Chain Amino Acids)",
    description: "BCAA supplements provide essential amino acids—leucine, isoleucine, and valine—that play a key role in muscle protein synthesis. They are commonly used for muscle recovery and endurance.",
    benefits: ["Muscle recovery", "Promotes protein synthesis", "Reduces muscle soreness"]
  },
  {
    id: 6,
    name: "Casein Protein",
    description: "Casein is a slow-digesting protein that provides a sustained release of amino acids. It is often consumed before bedtime to support muscle protein synthesis during sleep.",
    benefits: ["Nighttime muscle recovery", "Extended amino acid release", "Promotes fullness"]
  },
  {
    id: 7,
    name: "Pre-Workout Supplement",
    description: "Pre-workout supplements typically contain a mix of ingredients, including caffeine and amino acids, to enhance energy, focus, and endurance during exercise.",
    benefits: ["Increased energy", "Improved focus", "Enhanced exercise performance"]
  },
  {
    id: 8,
    name: "Vitamin D3",
    description: "Vitamin D3, also known as the sunshine vitamin, is crucial for bone health, immune function, and overall well-being. It is often obtained through sun exposure and supplements.",
    benefits: ["Bone health", "Immune support", "Mood regulation"]
  },
  {
    id: 9,
    name: "Glutamine",
    description: "Glutamine is an amino acid that plays a role in muscle protein synthesis and immune function. It is commonly used to support recovery and reduce muscle soreness.",
    benefits: ["Muscle recovery", "Immune support", "Reduced muscle soreness"]
  },
  {
    id: 10,
    name: "Probiotics",
    description: "Probiotics are live bacteria and yeasts that are beneficial for gut health. They help maintain a healthy balance of microorganisms in the digestive system.",
    benefits: ["Gut health", "Digestive support", "Immune system modulation"]
  },
  {
    id: 11,
    name: "Zinc",
    description: "Zinc is an essential mineral that supports various bodily functions, including immune function, wound healing, and DNA synthesis. It is commonly taken as a supplement.",
    benefits: ["Immune support", "Wound healing", "DNA synthesis"]
  },
  {
    id: 12,
    name: "Iron",
    description: "Iron is a vital mineral that is necessary for the production of hemoglobin and red blood cells. It plays a key role in oxygen transport in the body.",
    benefits: ["Oxygen transport", "Red blood cell production", "Prevention of anemia"]
  },
  {
    id: 13,
    name: "Turmeric Curcumin",
    description: "Turmeric contains curcumin, a compound known for its anti-inflammatory and antioxidant properties. Curcumin supplements are taken for various health benefits.",
    benefits: ["Anti-inflammatory", "Antioxidant", "Joint health"]
  },
  {
    id: 14,
    name: "Coenzyme Q10 (CoQ10)",
    description: "CoQ10 is a compound that helps produce energy in the cells. It is also known for its antioxidant properties and is commonly used as a supplement.",
    benefits: ["Cellular energy production", "Antioxidant", "Heart health"]
  }
];

const SupplementPage = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh' }}>
      <Container className="text-light">
        <h1 className="text-center">Supplement Information</h1>

        <Row className="mt-4">
          {supplementsData.map((supplement) => (
            <Col key={supplement.id} md={4} className="mb-4">
              <Card bg="dark" text="white">
                <Card.Body>
                  <Card.Title>{supplement.name}</Card.Title>
                  <Card.Text>{supplement.description}</Card.Text>
                  <Card.Subtitle className="mb-2">Key Benefits:</Card.Subtitle>
                  <ul>
                    {supplement.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SupplementPage;