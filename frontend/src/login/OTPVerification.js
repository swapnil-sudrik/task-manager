import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Input, Card, Container, Button } from 'reactstrap';
import otpi from '../image/otp.png'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const OTPVerification = ({ title, subTitle, path }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const isOTPVerified = ()=>{
            document.title = "Varify your OTP";
            if (!localStorage.getItem("signupOTP")) {
                navigate("/auth");
                toast.error("Resend OTP..!!");
            }
        }
        isOTPVerified();
    }, [navigate]);

    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [value, setValue] = useState();
    // To retrieve data
    const userEmail = localStorage.getItem('userEmail');


    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input
        if (index < otpInputRefs.length - 1 && value !== '') {
            otpInputRefs[index + 1].current.focus();
        }

        // Concatenate the values to form a single string
        const concatenatedOtp = newOtp.join('');
        setValue(concatenatedOtp);

    };

    const userOTP = localStorage.getItem('signupOTP');
    const onsubmitOTP = () => {
        try {
            if (value === userOTP) {
                navigate(path);
                localStorage.removeItem('signupOTP');
                localStorage.setItem('otpStatus','verified')
            }
            else {
                toast.error('OTP does not match!');
                localStorage.setItem('otpStatus','not-verified')
            }
        } catch {
            toast.error('Something went wrong, please try again!');
            localStorage.removeItem('signupOTP');
        }
    }

    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div className={`loader login-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="login-page-img d-none d-sm-none d-md-block d-lg-block">
                <img src={otpi} alt="otp" />
            </div>
            <div className="login-page-form p-3 w-50 w-sm-50 w-md-50 w-lg-50">
                <Card className="p-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <Container className="login-container">
                        <Form className="login-form" onSubmit={onsubmitOTP}>
                            <h1>{title}</h1>
                            <p>{subTitle} {userEmail}</p>
                            <p>Enter the OTP below to verify it</p>
                            <Row>
                                {otp.map((digit, index) => (
                                    <Col key={index}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                                innerRef={otpInputRefs[index]}
                                                style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                            />
                                        </FormGroup>
                                    </Col>
                                ))}
                            </Row>
                            <Button className="w-100" color="primary" type="submit">Verify</Button>
                            <div className="bottom-text">
                                <p>
                                    Didn't receive code? <Link onClick={()=>alert('ok')}>Resend it</Link>
                                </p>
                            </div>
                        </Form>
                    </Container>
                </Card>
            </div>
        </div>
    )
};

export default OTPVerification;
