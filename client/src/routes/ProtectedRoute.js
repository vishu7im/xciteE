import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const data = localStorage.getItem("user");
  const navigate = useNavigate();
  const { fetchUserdata, user } = AuthContext();

  useEffect(() => {
    fetchUserdata(data);
  }, []);

  if (!data) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
