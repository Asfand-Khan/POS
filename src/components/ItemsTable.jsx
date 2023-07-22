import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { decQty, incQty, remove } from "../app/cartSlice";

const ItemsTable = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer);

  const truncateString = (str, limit) => {
    if (str.length <= limit) {
      return str;
    }
    return str.slice(0, limit) + " ...";
  };

  const handleQtyInc = (id) =>{
    dispatch(incQty(id));
  }

  const handleQtyDec = (id) =>{
    dispatch(decQty(id));
  }

  const handleRemove = (id) => {
    dispatch(remove(id));
  };


  return (
    <>
      <div className="h-[56vh] md:h-[61vh] overflow-auto  relative">
        <table className="table-auto w-full">
          <thead className="table-header-group bg-zinc-300 text-zinc-500">
            <tr className="table-row text-center">
              <th className="font-medium p-1">Item</th>
              <th className="font-medium p-1">Qty</th>
              <th className="font-medium p-1">Price</th>
              <th className="font-medium p-1">Disc</th>
              <th className="font-medium p-1">Total</th>
              <th className="p-1"></th>
            </tr>
          </thead>
          <tbody>
          {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <tr key={product.id} className="text-center bg-zinc-50 text-sm">
                  <td className="p-1">{truncateString(product.title,20)}</td>
                  <td className="p-1 flex items-center">
                    <button 
                    onClick={()=>handleQtyInc(product.id)}
                    className="bg-zinc-300 px-2 text-center rounded-sm">+</button>
                    <p className="px-2 bg-white">{product.quantity}</p>
                    <button 
                    onClick={()=>handleQtyDec(product.id)}
                    className="bg-zinc-300 px-2 text-center rounded-sm">-</button>
                    </td>
                  <td className="p-1">{product.price}</td>
                  <td className="p-1">0.00</td>
                  <td className="p-1">{product.price*product.quantity}</td>
                  <td className="text-red-500 p-1">
                    <AiOutlineDelete onClick={()=>handleRemove(product.id)} className="cursor-pointer"/>
                  </td>
                </tr>
              ))
          ) : (
            <tr className="text-center text-zinc-400 row-span-4">
              <td colSpan={6}>Cart is empty</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemsTable;
