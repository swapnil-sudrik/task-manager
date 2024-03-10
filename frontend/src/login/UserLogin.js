import React, { useState } from "react";
import loginImg from '../image/login.svg';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';
import { useSelector } from "react-redux";
import useLogin from "../services/useLogin";
import { toast } from "react-toastify";


const UserLogin = () => {
    const isDarkMode = useSelector((state) => state.isDarkMode);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { login } = useLogin();
    const navigate = useNavigate();

        const onSubmitLoginDetails = (e) => {
            e.preventDefault();
            const dataToSend = {
                username: username,
                password: password
            }
            login(
                dataToSend,
                (response) => {
                    if (response.success===true) {
                        localStorage.setItem('userEmail', username);
                        localStorage.setItem('loginStatus', response.success);
                        navigate('/user/home');
                    }
                    else {
                        localStorage.setItem('loginStatus', response.success);
                        toast.error(response.message);
                    }

                },
                () => {
                    toast.error('Internal Server Error');
                }
            )
        }


    return (
        <div className={`loader login-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="login-page-img d-none d-sm-none d-md-block d-lg-block">
                <img src={loginImg} alt="login" />
            </div>
            <div className="login-page-form p-3">
                <Card className="p-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <Container className="login-container">
                        <Form className="login-form">
                            <h1>Start Your Journey!</h1>
                            <p>Please login to your account</p>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" name="password" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </FormGroup>
                            <Button className="w-100" color="primary" type="submit" onClick={onSubmitLoginDetails}>Login</Button>
                            <div className="bottom-text">
                                <p>
                                    Don't have an account? <Link to="/auth/user-register">Sign Up</Link>
                                </p>
                                <p>
                                    <Link to="/auth/forgot-password">Forgot password?</Link>
                                </p>
                            </div>
                        </Form>
                    </Container>
                </Card>
            </div>
        </div >
    )
}

export default UserLogin;