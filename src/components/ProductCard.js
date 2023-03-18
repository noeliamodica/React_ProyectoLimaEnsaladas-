import Crispy from '../assets/img/Crispy.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function ProductCard( {data}) {
  return (
    <Row xs={1} md={1} className="g-3">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={data.imagen} />
            <Card.Body>
              <Card.Title>{data.nombre}</Card.Title>
              <Card.Text>
                {data.ingredientes}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}


