import { useDispatch } from "react-redux";
import { add } from "../app/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const newProduct = {
      ...product,
      quantity:1
    }
    dispatch(add(newProduct));
  }
  return (
    <div onClick={()=>handleAddToCart(product)} key={product.name} className="flex flex-col items-center justify-center hover:opacity-70 transition">
      <div className="bg-white flex flex-col items-center justify-center rounded-sm p-2 cursor-pointer">
        <img src={product.image} alt="product" className="aspect-square w-1/2 rounded-sm" />
        <h4>{product.name}</h4>
      </div>
    </div>
  );
};

export default Product;
