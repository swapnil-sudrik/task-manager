import React from "react";
import TopBar from "./TopBar";
import { Col, Row } from "reactstrap";
import MenuBar from "./MenuBar";
import { Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import Home from "./Home";
import ViewTask from "./ViewTask";
import DeletedTask from "./DeletedTask";
import ComplatedTask from "./ComplatedTasks";
import ChangePassword from "./ChangePassword";
import PendingTasks from "./PendingTasks";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const TaskManager = () => {
    const isDarkMode = useSelector((state) => state.isDarkMode);
  
    return (
        <div>
            <TopBar />
            <div className="main-contain">
                <Row>
                    <Col md={3} className="d-none d-sm-none d-md-none d-lg-block left">
                        <MenuBar />
                    </Col>
                    <Col md={9} className="right main" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/add-task" element={<AddTask />} />
                            <Route path="/view-tasks" element={<ViewTask />} />
                            <Route path="/pending-tasks" element={<PendingTasks />} />
                            <Route path="/deleted-tasks" element={<DeletedTask />} />
                            <Route path="/complated-tasks" element={<ComplatedTask />} />
                            <Route path="/change-password" element={<ChangePassword />} />
                        </Routes>
                        <Footer />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TaskManager;