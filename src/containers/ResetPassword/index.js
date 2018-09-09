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
  console.log(JSON.stringify(values, 0, 2))
}


class ResetPassword extends Component {

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
                          <h1>Reset Password</h1>
                          <strong>Nome de usuario:</strong>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Field component="input" name="email">
                              {({input, meta}) => (
                                <div>
                                  <Input {...input} type="text" placeholder="E-mail"/>
                                </div>
                              )}
                            </Field>


                          </InputGroup>

                          <strong>Nome de usuario:</strong>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Email" autoComplete="email" name="email" component="input"/>
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

export default ResetPassword;
