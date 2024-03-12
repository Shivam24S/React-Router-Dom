import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1> this is Product Detail Page</h1>
      {params.productId}
    </>
  );
};

export default ProductDetailPage;
