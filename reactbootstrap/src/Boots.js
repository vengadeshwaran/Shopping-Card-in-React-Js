import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ApplyCss.css'


function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className='rowCol'>1 of 2</Col>
        <Col className='rowCol'>2 of 2</Col>
      </Row>
      <Row>
        <Col className='rowCol'>1 of 3</Col>
        <Col className='rowCol'>2 of 3</Col>
        <Col className='rowCol'>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;