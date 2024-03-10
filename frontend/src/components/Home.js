import { Container } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Home = () => {
    const isDarkMode = useSelector((state) => state.isDarkMode);
    const navigate = useNavigate();

    useEffect(()=>{
       if(!localStorage.getItem('loginStatus')){
        navigate('/auth')
       }
        },[navigate]);


    const DashboardCounter = ({ title, count }) => {
        return (
            <Card className=" mx-3 my-3 dashboard-card my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                <CardBody>
                    <CardTitle className="text-center d-title" tag='h2'>{title}</CardTitle>
                    <h2 className="mx-3 my-3">{count}</h2>
                </CardBody>
            </Card>
        )
    }

    return (
        <div className="dashboard">
            <h1 className="ms-3 mt-4">Dashboard</h1>
            <div className="d-flex dashboard-cards flex-wrap">
                <DashboardCounter title="Total Tasks" count={20} />
                <DashboardCounter title="Pending Tasks" count={10} />
                <DashboardCounter title="Complated Tasks" count={5} />
                <DashboardCounter title="Deleted Tasks" count={0} />
            </div>


            <Card className="my-3 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                <CardBody>
                    <CardText tag="h5">
                        Hii, This Web Application developed by the swapnil sudrik by the purpose
                        of the learning the react.js and spring boot. it's backend in Spring
                        Boot And frontend in react.js.
                        <br />
                    </CardText>
                    <hr/>
                    <div className="text-center">
                        <CardText>
                            1- Api Calling - using axois library
                            <br />
                            2- frontend technology - reactstrap
                            <br />
                            3- backend technology - Node.js & Express.js
                            <br />
                            4- IDE - vs Code <br />

                        </CardText>
                    </div>
                    <Container className="text-center py-3">
                        <Button color="primary" outline>
                            Start Using
                        </Button>
                    </Container>
                </CardBody>
            </Card>

        </div>
    )
}

export default Home;