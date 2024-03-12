import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import MainLayout from "./Routes/MainLayout";

// new and good approach for defining routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Product /> },
    ],
  },
]);

// old approach

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinition);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
