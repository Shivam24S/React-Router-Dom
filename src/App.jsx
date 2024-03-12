import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import MainLayout from "./Routes/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetailPage from "./Pages/ProductDetailPage";

// new and good approach for defining routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // we can use index as default page loading instead of path:""
      { path: "products", element: <Product /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
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
