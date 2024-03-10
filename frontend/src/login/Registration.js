import React, { useEffect, useState } from "react";
import signup from '../image/signup.png';
import { useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, User } from "lucide-react";
import signUp from "../services/signUp";
import { toast } from "react-toastify";

const Registration = () => {

    localStorage.removeItem('signupOTP');
    const isDarkMode = useSelector((state) => state.isDarkMode);
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();
    const {userSignUp}= signUp();


    useEffect(()=>{
    const checkLocalStourge = ()=>{
        if(!localStorage.getItem('otpStatus')){
            navigate('/auth');
        }
    }
    checkLocalStourge();
    },[navigate]);

    const onSubmitData =(e)=>{
        e.preventDefault();
        const dataToSend ={
            fname:fname,
            lname:lname,
            email:localStorage.getItem('userEmail'),
            password:password
        }

        userSignUp(
            dataToSend,
            ()=>{
                navigate('/user/home');
                toast.success('Your Account Successfully Created..!');
                localStorage.setItem('loginStatus', true);
                localStorage.removeItem('otpStatus');
            },
            ()=>{
                toast.error('Something went wrong, please try again..!');
                localStorage.setItem('loginStatus', false);
                localStorage.removeItem('otpStatus');

            }
        )
        
    }

    return (
        <div className={`loader login-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="login-page-img d-none d-sm-none d-md-block d-lg-block">
                <img src={signup} alt="sign up" />
            </div>
            <div className="login-page-form p-3">
                <Card className="p-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <Container className="login-container">
                        <Form className="login-form" onSubmit={onSubmitData}>
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <Row>
                                <Col md={6}>
                                    <FormGroup className="input-container">
                                        <Label for="fname">First Name</Label>
                                        <span className="icon"><User color="gray" size={20} /></span>
                                        <Input type="text" id="fname" name="fname"
                                            style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                            value={fname}
                                            onChange={(e)=>setFname(e.target.value)}
                                          required />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup className="input-container">
                                        <Label for="lname">Last Name</Label>
                                        <span className="icon"><User color="gray" size={20} /></span>
                                        <Input type="text" id="lname" name="lname"
                                            style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                            value={lname}
                                            onChange={(e)=>setLname(e.target.value)}                                           
                                           required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className="input-container">
                                <Label for="password">Set Password</Label>
                                <span className="icon"><LockKeyhole color="gray" size={20} /></span>
                                <Input type="password" id="password" name="password" 
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                   required />
                            </FormGroup>

                            <Button className="w-100" color="primary" type="submit">Create an Account</Button>
                            <div className="bottom-text">
                                <p>
                                    Already have an account? <Link to="/auth">Log in</Link>
                                </p>
                            </div>


                        </Form>
                    </Container>
                </Card>
            </div>
        </div >
    )
}

export default Registration;