import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword , setShowNewPassword]= useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleNewPasswordVisibility = () =>{
        setShowNewPassword(!showNewPassword);
    };
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div>
            <h1 className="ms-3 mt-4 text-center">Change Password</h1>
            <div className="add-task">
                <Card className="w-50 a px-3 px-3 mx-4 my-5 my-card" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <CardBody>
                        <Form>

                            <FormGroup>
                                <Label for="old-password">
                                    Old Password
                                </Label>
                                <InputGroup>


                                    <Input
                                        id="old-password"
                                        name="old-password"
                                        style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                        type={showPassword ? 'text' : 'password'}
                                    />
                                    <InputGroupText onClick={togglePasswordVisibility}>
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </InputGroupText>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="new-password">
                                    Old Password
                                </Label>
                                <InputGroup>
                                    <Input
                                        id="new-password"
                                        name="new-password"
                                        style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                                        type={showNewPassword ? 'text' : 'password'}
                                    />
                                    <InputGroupText onClick={toggleNewPasswordVisibility}>
                                        {showNewPassword ? <EyeOff /> : <Eye />}
                                    </InputGroupText>
                                </InputGroup>
                            </FormGroup>

                            <Container className="text-center">
                                <Button className="my-4 px-5" color="primary" type="submit">
                                   Update Password
                                </Button>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ChangePassword;