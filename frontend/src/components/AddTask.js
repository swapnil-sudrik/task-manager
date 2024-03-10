import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const AddTask = () => {

    const isDarkMode = useSelector((state) => state.isDarkMode);

    const showAlert = () => {
        Swal.fire({
          title: 'Task Added !',
          text: 'Task Successfully added !',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
        });
      };
    return (
        <div>
            <h1 className="ms-3 mt-4 text-center">Add Task</h1>
            <div className="add-task">
                <Card className="w-50 a px-3 px-3 mx-4 my-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="title">
                                            Title
                                        </Label>
                                        <Input
                                            id="title"
                                            name="title"
                                            type="text"
                                            style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="date">
                                            Due Date
                                        </Label>
                                        <Input
                                            id="date"
                                            name="date"
                                            type="date"
                                            style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="description">
                                    Description
                                </Label>
                                <Input
                                    id="description"
                                    name="description"
                                    type="textarea"
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                />
                            </FormGroup>

                            <Container className="text-center">
                                <Button onClick={showAlert} className="my-4 px-5" color="success">
                                    Add Task

                                </Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default AddTask;