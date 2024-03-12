import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <h1>this is product page</h1>
      <li>
        <Link to=":/productId"> Product-1</Link>
      </li>
      <li>
        <Link to="products/p2">Product-2</Link>
      </li>
      <li>
        <Link to="products/p3">Product-3</Link>
      </li>
    </>
  );
};
export default Product;
