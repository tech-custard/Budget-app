import { Outlet, Navigate } from "react-router-dom";

const checkAuthentication = () => {
  // TO-DO: Check if user is authenticated and return true or false
  return { token: true };
};

const PrivateRoutes = () => {
  const { token } = checkAuthentication();

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
