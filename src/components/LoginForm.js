import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './LoginForm.css';
function LoginForm() {
  return (
    <>
      <Form className="form col-md-5 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Col className="text-center" md={{ span: 2, offset: 5 }}>
        <h3>Login</h3>
      </Col>
    </>
  );
}

export default LoginForm;
