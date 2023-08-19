import { useDispatch } from "react-redux";
import { add } from "../app/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const newProduct = {
      ...product,
      quantity:1,
      isDiscountOpen: false,
    }
    dispatch(add(newProduct));
  }

  const truncateString = (str, limit) => {
    if (str.length <= limit) {
      return str;
    }
    return str.slice(0, limit) + " ...";
  };
  return (
    <div onClick={()=>handleAddToCart(product)} key={product.name} className="flex flex-col items-center justify-center hover:opacity-70 transition relative">
      <div className="bg-white flex flex-col items-center justify-center rounded-sm p-2 cursor-pointer">
        <img src={product.image} alt="product" className="aspect-square w-1/2 rounded-sm" />
        <h4 className="bg-slate-800/70 absolute text-xs text-white w-full text-center bottom-0">{truncateString(product.title,10)}</h4>
      </div>
    </div>
  );
};

export default Product;
