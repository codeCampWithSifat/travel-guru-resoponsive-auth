import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebase.init";

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequiredAuth;
