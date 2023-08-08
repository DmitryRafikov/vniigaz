import {React} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { publicRoutes } from '../routes';
import { FORM_ROUTE } from '../utils/consts';
import { useContext } from 'react/cjs/react.production.min';

const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = false
    return (
    <Switch>
        { user.isAuth && authRoutes.map (({path , Component}) =>
            <Route key={path} path={path} component={Component} exact/>
        )}
        { publicRoutes.map (({path , Component}) =>
            <Route key={path} path={path} component={Component} exact/>
        )}
        <Redirect to={FORM_ROUTE} />
    </Switch>
    );
}
export default AppRouter; 