import React from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Student Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Student's Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>REG. NO.</label>
                        <Form.Control
                          placeholder="REGISTRATION NO."
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>   
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Department</label>
                        <Form.Control
                          placeholder="Branch"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>CGPA</label>
                        <Form.Control
                          placeholder="CGPA"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>DOB</label>
                        <Form.Control
                          placeholder="DD/MM/YYYY"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>12th Marks</label>
                        <Form.Control
                          placeholder="eg. 99.99%"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>
                          10th Marks
                        </label>
                        <Form.Control
                          placeholder="eg. 10 CGPA or 99.99%"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>   
                  </Row>
                
                  <Row>
                    <Col md="12">
                     
                    </Col>
                  </Row>
                  <Form>
                  <Form.File 
                    id="custom-file"
                    label="Choose File"
                    custom
                    />
                  </Form>
                  <Button
                    className="btn-fill btn-info pull-right mt-1"
                    type="submit"
                  >
                    Upload Resume
                  </Button>
                  
                  <div className="clearfix"></div>
                  <Button
                    className="btn-fill pull-right mt-1 btn-block btn-info"
                    type="submit"
                  >
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/card_bg2.jpg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/avatar-1.jpe").default}
                    ></img>
                    <h5 className="title">I am proud to be a student at NIT JSR!</h5>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;