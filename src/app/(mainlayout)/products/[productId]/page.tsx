interface Props {
  params: {
    productId: string;
  };
}

const ProductId = ({ params }: Props) => {
  const productId = params.productId;
  return (
    <div>
      <h1>Dynamic product {productId}</h1>
    </div>
  );
};

export default ProductId;
