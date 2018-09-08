import React, {Component} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Link} from 'react-router-dom';


class LoginScreen extends Component {

  render() {


    return (
      <div className="app flex-row">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-1">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="7">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="2" className="text-right">
                          <Link to="/resetpassword">
                          <Button color="link" className="px-0">Forgot password?</Button>
                          </Link>
                        </Col>
                        <Col xs="2" className="text-right">
                          <Link to="/createuser">
                          <Button color="link" className="px-0">
                            Register Now!</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default LoginScreen;
