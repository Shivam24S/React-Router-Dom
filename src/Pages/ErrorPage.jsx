import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <main>
        <h1>An error occurred</h1>
        <p>this Page is not available</p>
        <button onClick={handleNavigate}>Home</button>
      </main>
    </>
  );
};
export default ErrorPage;
