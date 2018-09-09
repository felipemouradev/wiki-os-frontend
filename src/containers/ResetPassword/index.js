import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {Form, Field} from 'react-final-form'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
  console.log(JSON.stringify(values, 0, 2))
}



class ResetPassword extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form

                    onSubmit={onSubmit}
                    render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>

                        <h1>Reset your password</h1>
                        <p className="text-muted">Enter your email</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field component="input" name="username">
                            {({input, meta}) => (
                              <Input {...input} type="text" placeholder="Username" autoComplete="username"component="input"/>
                            )}
                          </Field>
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>

                          <Field component="input" name="email">
                            {({input, meta}) => (
                              <Input {...input} type="email" placeholder="Email" autoComplete="email"component="input"/>
                            )}
                          </Field>

                        </InputGroup>
                        <Button color="success" block>Reset</Button>


                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                      </form>
                    )}
                  />
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResetPassword;
