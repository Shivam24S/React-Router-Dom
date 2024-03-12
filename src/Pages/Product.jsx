import { Link } from "react-router-dom";

const ProductData = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
  { id: "p4", title: "product-4" },
  { id: "p5", title: "product-5" },
];

const Product = () => {
  return (
    <>
      <h1>this is product page</h1>
      {ProductData.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </>
  );
};
export default Product;
