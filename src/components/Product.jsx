const Product = ({ product }) => {
  return (
    <div key={product.name} className="flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col items-center justify-center rounded-sm p-2 cursor-pointer">
        <img src={product.image} alt="product" className="aspect-square w-1/2 rounded-sm" />
        <h4>{product.name}</h4>
      </div>
    </div>
  );
};

export default Product;
