import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const data = localStorage.getItem("user");

  if (!data) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
