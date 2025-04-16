import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

const PrivateRoute = (): React.JSX.Element => {
  const { access_token } = useSelector((state: RootState) => state.auth);

  const isTokenValid = Boolean(access_token);

  return isTokenValid ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
