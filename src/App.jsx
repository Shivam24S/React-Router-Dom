import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
