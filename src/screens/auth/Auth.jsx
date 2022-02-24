import { useState } from "react";

import AuthLayout from "../../layouts/Auth.layout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
    const [isSignUpView, setIsSignUpView] = useState(false);

    const toggleAuthView = (event) => {
        event && event.preventDefault && event.preventDefault();
        console.log("toggleAuthView");
        setIsSignUpView(!isSignUpView);
    };

    return (
        <AuthLayout isSignUpView={isSignUpView} toggleAuthView={toggleAuthView}>
            {isSignUpView ? <SignUp /> : <SignIn />}
        </AuthLayout>
    );
};

export default Auth;
