import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Form, Field} from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


class CreateUser extends Component {

  render() {


    return (
      <div className="app flex-row">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-1">
                  <CardBody>
                    <Form
                      onSubmit={onSubmit}
                      // initialValues={{stooge: 'larry', employed: false}}
                      render={({handleSubmit, form, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit}>
                          <h1>Login</h1>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Field type="text" placeholder="Username" autoComplete="username" name="username"
                                   component="input"/>

                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Field type="text" placeholder="Email" autoComplete="email" name="email" component="input"/>
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Field name="password" type="password" placeholder="Password" autoComplete="new-password"
                                   component="input"/>
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Field name="repeat-password" type="password" placeholder="Repeat password"
                                   autoComplete="new-password"
                                   component="input"/>
                          </InputGroup>
                          <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                              Submit
                            </button>
                            <button
                              type="button"
                              onClick={form.reset}
                              disabled={submitting || pristine}
                            >
                              Reset
                            </button>
                          </div>
                          <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                      )}
                    />


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

export default CreateUser;
