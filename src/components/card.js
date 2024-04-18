import React from 'react';
import Card from 'react-bootstrap/Card';

function CardComponent({ cards }) {
  return (
    <div>
      {cards &&
        cards.map((card, index) => (
          <Card key={index}>
            <Card.Img variant='top' src={card.image} />
            <Card.Body>
              <Card.Title>{card.Title}</Card.Title>
              <Card.Text>{card.Text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default CardComponent;
