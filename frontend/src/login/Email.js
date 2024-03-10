import React, { useState } from "react";
import forgot from '../image/forgot.png';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';
import { useSelector } from "react-redux";
import { Mail } from "lucide-react";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import useSendEmail from "../services/useSendEmail";
import { toast } from "react-toastify";

const Email = ({ title, subTitle, btnName, footer, path, navigateTo, emailSubject }) => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const isDarkMode = useSelector((state) => state.isDarkMode);

    const { loading, sendOTP } = useSendEmail();

    const onsubmitEmail = (e) => {
        e.preventDefault();

        const dataToSend = {
            userEmail: email,
            emailSubject: emailSubject
        }

        sendOTP(
            dataToSend,
            (response) => {
                if (response.sent === false) {
                    toast.error(response.message);
                }
                else {

                    localStorage.setItem('signupOTP', response.otp);
                    localStorage.setItem('userEmail', email);
                    navigate(navigateTo);
                }
            },
            () => {
                showAlert();
            }
        );
    };

    const showAlert = () => {
        Swal.fire({
            title: 'OTP Not Sent!',
            text: 'Something went wrong , please try again!',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
        });
    };
    return (
        <div className={`loader login-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="login-page-img d-none d-sm-none d-md-block d-lg-block">
                <img src={forgot} alt="forgot" />
            </div>
            <div className="login-page-form p-3">
                <Card className="p-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <Container className="login-container">
                        <Form className="login-form" onSubmit={onsubmitEmail}>
                            {/* <h1>Forgot Your Password</h1>
                            <p>Please enter email to forgot password.</p> */}
                            <h1>{title}</h1>
                            <p>{subTitle}</p>
                            <FormGroup className="input-container">
                                <Label for="email">Enter your email</Label>
                                <span className="icon"><Mail color="gray" size={20} /></span>
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                />
                            </FormGroup>
                            <Button className="w-100" color="primary" type="submit">{btnName}</Button>
                            <div className="bottom-text">
                                <p>
                                    {footer} <Link to={path}>Log in</Link>
                                </p>
                            </div>
                        </Form>
                    </Container>
                </Card>
            </div>
            {
                loading &&
                <Loader />
            }
        </div >
    )
}

export default Email;