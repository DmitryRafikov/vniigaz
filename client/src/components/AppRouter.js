import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { FORM_ROUTE } from '../utils/routeConsts';

const AppRouter = () => {
    return (
    <Routes>
        {/* { user.isAuth && authRoutes.map (({path , Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
        )} */}
        { publicRoutes.map (({path , Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route element={<Navigate replace to={FORM_ROUTE} />} />
    </Routes>
    );
}
export default AppRouter; 