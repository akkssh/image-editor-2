import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../screens/auth/Auth";
import Dashboard from "../screens/dashboard/Dashboard";

const AppRoutes = () => (
    <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/sign-in" />
    </Switch>
);

export default AppRoutes;
