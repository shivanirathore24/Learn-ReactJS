import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => navigate("/"), 3000);
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => navigate(-1), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h1>Oops! Something went wrong. Redirecting you...</h1>
    </>
  );
}

export default ErrorPage;
