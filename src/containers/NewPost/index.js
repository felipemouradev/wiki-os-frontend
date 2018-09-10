import React, {Component} from 'react';
import axios from 'axios'

import {Button} from 'reactstrap';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';


import {Form, Field} from 'react-final-form'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';

const URL = 'http://localhost:4000/api/posts';

class NewPost extends Component {

    state: {
        author: "",
        category: "",
        text: ""
    }
    onSubmit = values => {
        let text = this.state.text;
        let data = ({name: values.name, category: values.category, text});
        axios.post(URL, data).then(res => {
            console.log(res.data);
        }).catch((err) => {
            console.log("Error " + err);
        });
        console.log(JSON.stringify(values, 0, 2))
    }

    onEditorStateChange = (value) => {
        this.setState({text: value.getCurrentContent().getPlainText()})
    }

    render() {

        return <Row>
            <Col xs="12" sm="12">
                <Card>
                    <CardHeader>
                        <strong><h2>New Post</h2></strong><br/>
                        <strong>New Post</strong>
                    </CardHeader>
                    <CardBody>
                        <Form
                            onSubmit={this.onSubmit}
                            render={({handleSubmit, form, submitting, pristine, values}) => (
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs="8">
                                            <FormGroup>
                                                <Label htmlFor="name">Name</Label>
                                                <Field component="input" name="name">
                                                    {({input, meta}) => (
                                                        <Input {...input} type="text" placeholder="Enter your name"
                                                               autoComplete="name"
                                                               component="input"/>
                                                    )}
                                                </Field>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="4">
                                            <FormGroup>
                                                <Label htmlFor="category">Category</Label>

                                                <Field component="input" name="category">
                                                    {({input, meta}) => (
                                                        <Input {...input} type="select" placeholder="Enter your name"
                                                               autoComplete="name"
                                                               component="input">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </Input>
                                                    )}
                                                </Field>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                            <FormGroup>
                                                <div className="rdw-storybook-root">
                                                    <strong>Seu Leave your comment:</strong>
                                                    <Editor
                                                        toolbarClassName="toolbarClassName"
                                                        wrapperClassName="wrapperClassName"
                                                        editorClassName="editorClassName"
                                                        onEditorStateChange={this.onEditorStateChange}
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="float-right">
                                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                            <Button block color="secondary">Save</Button>
                                        </Col>
                                    </Row>

                                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                                </form>
                            )}
                        />
                    </CardBody>
                </Card>
            </Col>

        </Row>


    }

}

export default NewPost;
