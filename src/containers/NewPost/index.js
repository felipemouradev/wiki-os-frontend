import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
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

class NewPost extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {

    return <Row>
      <Col xs="12" sm="12">
        <Card>
          <CardHeader>
            <strong><h2>New Post</h2></strong><br/>
            <strong>New Post</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="8">
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter your name" required/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="ccmonth">Category</Label>
                  <Input type="select" name="ccmonth" id="ccmonth">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </Input>
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
          </CardBody>
        </Card>
      </Col>

    </Row>


  }

}

export default NewPost;
