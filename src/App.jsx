import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Product from "./component/Product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Product /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
