import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CountryCards({ cards }) {
  return (
    <div>
      <Container>
        <Row>
          {cards.map((ele, index) => (
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card key={index} className="card">
                <Card.Img variant="top" src={ele.flags.png} alt={ele.name.common} className="flag-image"/>
                <Card.Body>
                  <Card.Title>{ele.name.common}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CountryCards;
