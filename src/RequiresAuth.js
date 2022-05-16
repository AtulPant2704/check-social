import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);

  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
