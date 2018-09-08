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


class LoginScreen extends Component {

  render() {


    return (
      <div className="app flex-row">
        <Form
          onSubmit={onSubmit}
          // initialValues={{stooge: 'larry', employed: false}}
          render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Field
                    name="username"
                    component="input"
                    type="text"
                    placeholder="User Name"/>
                </InputGroup>
              </div>
              <div>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password" autoComplete="current-password"/>
                </InputGroup>
              </div>
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
      </div>
    );
  }
}

export default LoginScreen;
