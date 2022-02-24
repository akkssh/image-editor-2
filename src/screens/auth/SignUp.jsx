import React, { Component } from "react";

import SignUpView from "./SignUp.view";
import SupabaseService from "../../services/supabase.service";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormLoading: false,
        };
    }

    signUpUser = (obj) => {
        this.setState({ isFormLoading: true });
        SupabaseService.signUp(obj).then(
            (res) => {
                this.setState({ isFormLoading: false });
                console.log({ res });
            },
            (err) => {
                this.setState({ isFormLoading: false });
                console.log({ err });
            }
        );
    };

    render() {
        const { isFormLoading } = this.state;

        return (
            <div>
                <SignUpView
                    onSubmit={this.signUpUser}
                    isLoading={isFormLoading}
                />
            </div>
        );
    }
}

export default SignUp;
