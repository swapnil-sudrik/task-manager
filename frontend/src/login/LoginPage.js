import React, { useEffect } from "react";
import LoginTopBar from "./LoginTopBar";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./UserLogin";
import Footer from "../components/Footer";
import Registration from "./Registration";
import OTPVerification from "./OTPVerification";
import NotFound from "../components/NotFound";
import NewPassword from "./NewPassword";
import Email from "./Email";

const LoginPage = () => {

  
    //for registration.
    const title = "Sign Up";
    const subTitle = "Please enter your email to Verify.";
    const btnName = "Request to Create Account";
    const footer = "Already have an account?";
    const path = "/auth";
    const navigateToPath = "/auth/otp-verification/sign-up";

    //otp verification for signup

    const signUpOTPTitle = "OTP Verification"
    const signUpOTPSubTitle = "OTP has been sent via Email to";
    const signUpOTPPath = "/auth/otp-verified/personal-details"
    const signUpOTPSubject = "OTP For the Registration"

    //forgot password

    const forgotPasswordTitle = "Sign Up";
    const forgotPasswordSubTitle = "Please enter your email to Verify.";
    const forgotPasswordBTNName = "Request to Verify Email";
    const forgotPasswordfooter = "Password Remembered?";
    const forgotPasswordpath = "/auth";
    const forgotPasswordnavigateToPath = "/auth/otp-verification/forgot-password";
    const forgotPasswordSubject = "OTP For the Forgot Password";


    //otp verification for forgot password

    const forgotOTPTitle = "OTP Verification"
    const forgotOTPSubTitle = "OTP has been sent via Email to"
    const forgotOTPPath = "/auth/otp-verified/new-password"

    useEffect(()=>{
        const clearLocalStourage = ()=>{
            localStorage.removeItem('userEmail');
            localStorage.removeItem('loginStatus');
            localStorage.removeItem('signupOTP');
        }
        clearLocalStourage();
    },[]);


    return (
        <div>
            <LoginTopBar />
            <div className="login-body">
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<UserLogin />} />
                    <Route path="/user-register" element={<Email title={title} subTitle={subTitle} btnName={btnName} footer={footer} path={path} navigateTo={navigateToPath} emailSubject={signUpOTPSubject}/>} />
                    <Route path="/otp-verified/personal-details" element={<Registration />} />
                    <Route path="/otp-verification/sign-up" element={<OTPVerification title={signUpOTPTitle} subTitle={signUpOTPSubTitle} path={signUpOTPPath} />} />
                    <Route path="/forgot-password" element={<Email title={forgotPasswordTitle} subTitle={forgotPasswordSubTitle} btnName={forgotPasswordBTNName} footer={forgotPasswordfooter} path={forgotPasswordpath} navigateTo={forgotPasswordnavigateToPath} emailSubject={forgotPasswordSubject} />} />
                    <Route path="/otp-verification/forgot-password" element={<OTPVerification title={forgotOTPTitle} subTitle={forgotOTPSubTitle} path={forgotOTPPath} />} />

                    <Route path="/otp-verified/new-password" element={<NewPassword />} />
                </Routes>
            </div>

            <Footer />
        </div>
    )
}

export default LoginPage;