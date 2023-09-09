import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Form from './pages/Form';
import {ADMIN_ROUTE, LOGIN_ROUTE, FORM_ROUTE} from './utils/routeConsts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE, 
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: FORM_ROUTE,
        Component: Form
    }
]