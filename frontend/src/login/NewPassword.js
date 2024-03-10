import React from "react";
import newpass from '../image/newpassword.png';
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';
import { useSelector } from "react-redux";
import { LockKeyhole } from "lucide-react";

const NewPassword = () => {
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div className={`loader login-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="login-page-img d-none d-sm-none d-md-block d-lg-block">
                <img src={newpass} alt="new password" />
            </div>
            <div className="login-page-form p-3">
                <Card className="p-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <Container className="login-container">
                        <Form className="login-form">
                            <h1>Reset Password</h1>
                            <p>The password should have atleast 6 characters.</p>
                            <FormGroup className="input-container">
                                <Label for="password">Current Password</Label>
                                <span className="icon"><LockKeyhole color="gray" size={20} /></span>
                                <Input type="password" id="password" name="password"
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                    required />
                            </FormGroup>

                            <FormGroup className="input-container">
                                <Label for="npassword">New Password</Label>
                                <span className="icon"><LockKeyhole color="gray" size={20} /></span>
                                <Input type="password" id="npassword" name="npassword" 
                                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}

                                    required />
                            </FormGroup>


                            <Button className="w-100" color="primary" type="submit">Reset</Button>
                            <div className="bottom-text">
                                <p>
                                    Know your password? <Link to="/auth">Log in</Link>
                                </p>
                            </div>
                        </Form>
                    </Container>
                </Card>
            </div>
        </div >
    )
}

export default NewPassword;