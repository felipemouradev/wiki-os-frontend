import React, {Component} from 'react';
import {Button} from 'reactstrap';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
  ListGroup, ListGroupItem
} from 'reactstrap';

class MyAccount extends Component {
  ///postingN Category Author Data

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
      nPostingN: props.nPostingN,
      category: props.category,
      author: props.audio,
      data: props.data
    };
  }

  render() {

    return <Row className='center-block'>
      <Col xs="12" sm="12">
        <Card>
          <CardHeader>
            <strong><h2>New Post</h2></strong><br/>
            <strong>New Post</strong>
          </CardHeader>

          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Wiki <small className="text-muted">List</small>
                  </CardHeader>
                  <CardBody>
                    <Table responsive hover>
                      <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">posting</th>
                        <th scope="col">Category</th>
                        <th scope="col">author</th>
                        <th scope="col">data</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>166</td>
                        <td>54</td>
                        <td>85748</td>
                      </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>

        </Card>
      </Col>

    </Row>


  }

}

export default MyAccount;
