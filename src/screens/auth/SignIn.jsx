import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import SignInView from "./SignIn.view";
import SupabaseService from "../../services/supabase.service";
import AuthTokenService from "../../services/authToken.service";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    redirectToDashboard = () => {
        const { history } = this.props;
        history.push("/dashboard");
    };

    signInUser = (data) => {
        this.setState({ isLoading: true });
        SupabaseService.signIn(data).then(
            (res) => {
                this.setState({ isLoading: false });
                this.redirectToDashboard();
            },
            (err) => {
                this.setState({ isLoading: false });
                console.log({ err });
            }
        );
    };

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                <SignInView isLoading={isLoading} onSubmit={this.signInUser} />
            </div>
        );
    }
}

SignIn.propTypes = {
    history: PropTypes.shape().isRequired,
};

export default withRouter(SignIn);
