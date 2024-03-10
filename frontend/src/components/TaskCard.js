import { Calendar, Circle, FileEdit, Trash } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

const TaskCard = ({ task }) => {
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div className="container-single-card my-2">
            <Card className="single-card my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                <CardBody>
                    <Row className="align-middle">
                        <Col md={7}>
                            <div className="col d-flex">
                                <div>
                                    <Circle color="gray" size={19} />
                                </div>
                                <div className="task-title">
                                    <p>{task.title}</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="col d-flex justify-content-end last-item align-middle">
                                <div className="px-2"><Circle color={task.status === "Complated" ? 'green' : task.status === "Pending" ? 'blue' : task.status === "Deleted" ? 'red' : 'pink'} fill={task.status === "Complated" ? 'green' : task.status === "Pending" ? 'blue' : task.status === "Deleted" ? 'red' : 'pink'} size={10} />&nbsp;{task.status}</div>
                                <div className="px-2"><Calendar size={12} />&nbsp;{task.dateAndTime}</div>
                                <Link to={`/edit-task/${task.id}`} className="px-2"><Button color="warning"><FileEdit color="black" size={18} /></Button></Link>
                                <Link to={`/delete-task/${task.id}`} className="px-2"><Button color="danger"><Trash color="black" size={18} /></Button></Link>


                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default TaskCard;