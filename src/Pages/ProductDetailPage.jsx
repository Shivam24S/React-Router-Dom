import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1> this is Product Detail Page</h1>
      {params.productId}
      <br />
      <button>
        <Link to=".." relative="path">
          back
        </Link>{" "}
      </button>
    </>
  );
};

export default ProductDetailPage;
