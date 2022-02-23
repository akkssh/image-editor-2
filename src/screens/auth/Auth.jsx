import { useState } from "react";

import AuthLayout from "../../layouts/Auth.layout";
import SignIn from "./SignIn.view";
import SignUp from "./SignUp.view";

const Auth = () => {
    const [isSignUpView, setIsSignUpView] = useState(false);

    const toggleAuthView = (event) => {
        event && event.preventDefault && event.preventDefault();
        setIsSignUpView(!isSignUpView);
    };

    return (
        <AuthLayout>
            {isSignUpView ? (
                <SignUp toggleAuthView={toggleAuthView} />
            ) : (
                <SignIn toggleAuthView={toggleAuthView} />
            )}
        </AuthLayout>
    );
};

export default Auth;
