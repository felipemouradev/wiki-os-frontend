import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
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

const URL = 'http://localhost:4000/api/register';

const onSubmit = values => {
    console.log(JSON.stringify(values, 0, 2))
}


class Register extends Component {
    state: {
        username: "",
        email: "",
        password: "",
        repeat_password: ""
    }
    onSubmit = values => {
        let data = ({username: values.username, email: values.email,password: values.password, repeat_password: values.repeat_password});
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
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form

                                        onSubmit={this.onSubmit}
                                        render={({handleSubmit, form, submitting, pristine, values}) => (
                                            <form onSubmit={handleSubmit}>

                                                <h1>Register</h1>
                                                <p className="text-muted">Create your account</p>
                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-user"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Field component="input" name="username">
                                                        {({input, meta}) => (
                                                            <Input {...input} type="text" placeholder="Username"
                                                                   autoComplete="username" component="input"/>
                                                        )}
                                                    </Field>
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                    </InputGroupAddon>

                                                    <Field component="input" name="email">
                                                        {({input, meta}) => (
                                                            <Input {...input} type="email" placeholder="Email"
                                                                   autoComplete="email" component="input"/>
                                                        )}
                                                    </Field>

                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-lock"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Field component="input" name="password">
                                                        {({input, meta}) => (
                                                            <Input {...input} type="password" placeholder="Password"
                                                                   autoComplete="password" component="input"/>
                                                        )}
                                                    </Field>

                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-lock"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Field component="input" name="repeat_password">
                                                        {({input, meta}) => (
                                                            <Input {...input} type="password"
                                                                   placeholder="Repeat Password"
                                                                   autoComplete="repeat_password" component="input"/>
                                                        )}
                                                    </Field>

                                                </InputGroup>
                                                <Button color="success" block>Create Account</Button>


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

export default Register;
