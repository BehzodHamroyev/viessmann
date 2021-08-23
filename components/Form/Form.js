import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center ">
        <div className="col-8 d-flex  align-items-center">
          <Form className="w-100 ">
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="mt-3" check>
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                Check me out
              </Label>
            </FormGroup>
            <Button className="btn-danger w-100 mt-4">Sign in</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Example;
