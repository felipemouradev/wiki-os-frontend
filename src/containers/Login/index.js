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

import {Form, Field} from 'react-final-form'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import axios from "axios/index";

const URL = 'http://localhost:4000/api/posts';
const onSubmit = values => {
    window.alert(JSON.stringify(values, 0, 2))
    console.log(JSON.stringify(values, 0, 2))
}


class Login extends Component {
    state: {
        nameuser: "",
        password: ""
    }
    onSubmit = values => {
        let data = ({nameuser: values.nameuser, password: values.password});
        axios.post(URL, data).then(res => {
            console.log(res.data);
        }).catch((err) => {
            console.log("Error " + err);
        });
        console.log(JSON.stringify(values, 0, 2))
    }



    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form
                                            onSubmit={this.onSubmit}
                                            render={({handleSubmit, form, submitting, pristine, values}) => (
                                                <form onSubmit={handleSubmit}>
                                                    <h1>Login</h1>
                                                    <p className="text-muted">Sign In to your account</p>
                                                    <InputGroup className="mb-3">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="icon-user"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>

                                                        <Field component="input" name="username">
                                                            {({input, meta}) => (
                                                                <Input {...input} type="text" placeholder="Username"
                                                                       autoComplete="username" component="input"/>
                                                            )}
                                                        </Field>
                                                    </InputGroup>
                                                    <InputGroup className="mb-4">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="icon-lock"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>

                                                        <Field component="input" name="password">
                                                            {({input, meta}) => (
                                                                <Input {...input} type="password" placeholder="Password"
                                                                       autoComplete="current-password"
                                                                       component="input"/>
                                                            )}
                                                        </Field>


                                                    </InputGroup>
                                                    <Row>
                                                        <Col xs="6">
                                                            <Button color="primary" className="px-4">Login</Button>
                                                        </Col>
                                                        <Col xs="6" className="text-right">

                                                            <Link to="/reset"><Button color="link" className="px-0">Forgot
                                                                password?</Button></Link>
                                                        </Col>
                                                    </Row>
                                                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                                                </form>
                                            )}
                                        />
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: 44 + '%'}}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                            <Link to="/register"><Button color="primary" className="mt-3" active>Register
                                                Now!</Button></Link>
                                        </div>
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

export default Login;
