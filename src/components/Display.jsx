import { useSelector } from "react-redux";
import DisplayButton from "./DisplayButton";
import DisplayItem from "./DisplayItem";
import { useCallback, useMemo, useState } from "react";
import {useDispatch} from "react-redux";
import { addToHold } from "../app/onHoldSlicer";
import toast from "react-hot-toast";
import { addProductsToLocalStorage, reset } from "../app/cartSlice";

const Display = () => {

  const dispatch = useDispatch();
  
  const date = useMemo(()=>{
    return new Date();
  },[]);

  let currentDay= String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();

  const [discount,setDiscount] = useState(0);
  const cartProducts = useSelector((state) => state.cartReducer);

  const tax = 2/100;

  const totalCount = useMemo(() => {
    return cartProducts
      .map((product) => product.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }, [cartProducts]);

  const totalAmount = useMemo(()=>{
      return cartProducts
      .map(product => product.quantity*product.price)
      .reduce((accumulator,currentValue)=>accumulator+currentValue,0)
  },[cartProducts]);

  const totalOrder = useMemo(()=>{
    return (totalAmount+tax)-discount;
  },[totalAmount,tax,discount]);

  const generateUniqueId = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16);
  };

  const handleHold = useCallback(()=>{
    dispatch(
      addToHold({id:generateUniqueId(),date:`${currentDay}/${currentMonth}/${currentYear}`,totalOrder,name:"Guest",cartProducts})
      );

    toast.success("Cart Added To OnHold/Draft");
    
    dispatch(reset())
  },[dispatch,cartProducts,totalOrder,currentDay,currentMonth,currentYear]);

  const handlePay = () => {
    const win = window;
    dispatch(addProductsToLocalStorage());
    win.open(`/order?from=main`,"order","height=500,width=600");
  }

  return (
    <section className="m-1 border-[1px] border-zinc-300 p-1 rounded-sm">
      <div className="flex gap-1">
        <div className="border-[1px] border-zinc-300 rounded-sm w-full">
          <DisplayItem title="No. of Items" value={cartProducts.length} />
          <DisplayItem title="Total Count" value={totalCount} />
          <DisplayItem title="Sale Mode" isSelectBox />
        </div>
        <div className="border-[1px] border-zinc-300 rounded-sm w-full">
          <DisplayItem title="Taxable Amnt" value={totalAmount} />
          <DisplayItem title="Tax (Incl.)" value={tax} />
          <DisplayItem title="Discount" value={discount} setDiscount={setDiscount} isDisc />
          <DisplayItem title="Total Order" value={totalOrder} isRed />
        </div>
      </div>
      <div className="border-[1px] border-zinc-300 rounded-sm mt-2 p-2 flex gap-2 justify-around">
        <DisplayButton
          label="Cancel"
          onclick={() => {}}
          color="bg-orange-300"
        />
        <DisplayButton label="Hold" onclick={() => handleHold()} color="bg-zinc-400" />
        <DisplayButton label="Pay" onclick={() => handlePay()} color="bg-blue-500" />
        <DisplayButton label="Card" onclick={() => {}} color="bg-blue-500" />
      </div>
    </section>
  );
};

export default Display;
