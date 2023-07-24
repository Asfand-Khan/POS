import { useSelector } from "react-redux";
import DisplayButton from "./DisplayButton";
import DisplayItem from "./DisplayItem";
import { useMemo, useState } from "react";

const Display = () => {
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
        <DisplayButton label="Hold" onclick={() => {}} color="bg-zinc-400" />
        <DisplayButton label="Pay" onclick={() => {}} color="bg-blue-500" />
        <DisplayButton label="Card" onclick={() => {}} color="bg-blue-500" />
      </div>
    </section>
  );
};

export default Display;
