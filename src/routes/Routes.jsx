import { Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../screens/auth/Auth";
import Dashboard from "../screens/dashboard/Dashboard";

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/auth" component={SignIn} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/auth" />
        </Switch>
    );
};

export default AppRoutes;
