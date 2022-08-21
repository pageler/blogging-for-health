import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export interface IPrivateRouteProps {}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
