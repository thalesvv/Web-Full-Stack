
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from  'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
// import './App.css';

import { Home } from '../Home'


function App() {
  return (
    <Container>

      <Form>
        <Row>
          <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
          </Col>
      </Row>
      <Row>
    <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col xs={6}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col>
      </Row>
    </Form>

    <Link to="../">Voltar</Link>


        
    </Container>
  );
}

export default App;
