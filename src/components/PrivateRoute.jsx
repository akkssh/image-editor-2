import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import SupabaseService from "../services/supabase.service";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isActiveSession = SupabaseService.getSession();
    console.log({ isActiveSession });

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!SupabaseService.getSession()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/auth",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
                return <Component {...props} />;
            }}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.shape(),
};

PrivateRoute.defaultProps = {
    location: null,
};

export default PrivateRoute;
