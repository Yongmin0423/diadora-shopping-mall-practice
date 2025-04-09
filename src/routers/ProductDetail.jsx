import { useOutletContext, Navigate } from "react-router-dom";

export default function ProductDetail() {
  const { authenticate } = useOutletContext();

  if (!authenticate) {
    return <Navigate to="/login" replace />;
  }
  return <h1>Detail</h1>;
}
