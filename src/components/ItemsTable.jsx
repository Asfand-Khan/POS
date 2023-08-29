import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { decQty, incQty, remove, toggleDiscount } from "../app/cartSlice";
import {
  BsJournalText,
  BsJournalCheck,
  BsJournals,
  BsFullscreen,
} from "react-icons/bs";
import Modal from "./Modal";
import { useState } from "react";

const ItemsTable = () => {
  const [open, setOpen] = useState(false);
  const [custName, setCustName] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  // const [discountRs, setDiscountRs] = useState("");
  // const [openDiscount, setOpenDiscount] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer);

  const truncateString = (str, limit) => {
    if (str.length <= limit) {
      return str;
    }
    return str.slice(0, limit) + " ...";
  };

  const handleQtyInc = (id) => {
    dispatch(incQty(id));
  };

  const handleQtyDec = (id) => {
    dispatch(decQty(id));
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleDraftClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <div className="h-[56vh] md:h-[61vh] overflow-auto  relative">
        <div className="w-full flex justify-between items-center bg-zinc-300 p-2">
          <div>
            <input
              value={custName}
              type="text"
              placeholder="Customer Name"
              onChange={(e) => {
                setCustName(e.target.value);
              }}
              className="
            py-1
            px-2
            w-40
            md:w-80
            rounded-sm
            text-xs
            outline-none
            focus:outline-none
            "
            />
          </div>
          <div className="flex space-x-4 px-2">
            <BsJournalText
              title="Drafts"
              className="text-zinc-800 cursor-pointer transition-all transform hover:scale-125"
              onClick={handleDraftClick}
            />
            <BsJournals
              title="Orders"
              className="text-zinc-800 cursor-pointer transition-all transform hover:scale-125"
            />
            <BsJournalCheck
              title="Invoices"
              className="text-zinc-800 cursor-pointer transition-all transform hover:scale-125"
            />
            <BsFullscreen
              title="Full Screen"
              className="text-zinc-800 cursor-pointer transition-all transform hover:scale-125"
            />
          </div>
        </div>
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
                  <td className="p-1">{truncateString(product.title, 20)}</td>
                  <td className="p-1 flex items-center">
                    <button
                      onClick={() => handleQtyInc(product.id)}
                      className="bg-zinc-300 px-2 text-center rounded-sm"
                    >
                      +
                    </button>
                    <p className="px-2 bg-white">{product.quantity}</p>
                    <button
                      onClick={() => handleQtyDec(product.id)}
                      className="bg-zinc-300 px-2 text-center rounded-sm"
                    >
                      -
                    </button>
                  </td>
                  <td className="p-1">{product.price}</td>
                  <td
                    className="p-1"
                    onClick={() => dispatch(toggleDiscount(product.id))}
                  >
                    0.00
                  </td>
                  <td
                    className={`
                    w-[180px]
                    aspect-square
                    bg-white
                    border-2
                    rounded-md
                    absolute
                    left-10
                    p-1
                    ${product.isDiscountOpen ? "" : "hidden"}
                  `}
                  >
                    <div
                      className="
                      w-full
                      h-full
                      bg-white
                      border-2
                      rounded-md
                    "
                    >
                      <p className="w-full text-start pl-2 py-2 rounded-t-md border-b-[1px]">
                        Edit Discount
                      </p>
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="flex items-center justify-center border-[1px] w-fit rounded-sm overflow-hidden mt-3">
                          <p className="bg-zinc-300 text-white py-1 px-3 cursor-pointer">
                            %
                          </p>
                          <p className="py-1 px-3 cursor-pointer">Rs.</p>
                        </div>
                        <input
                          value={discountPercent}
                          onChange={(e) => setDiscountPercent(e.target.value)}
                          type="text"
                          placeholder="0.0%"
                          className="
                          w-5/6
                          border-[1px]
                          p-1
                          rounded-md
                        "
                        />
                        <button
                          className="
                          bg-zinc-300
                          py-1
                          px-5
                          text-white
                          rounded-sm
                          hover:bg-zinc-400
                          transition
                          cursor-pointer
                        "
                          onClick={() => dispatch(toggleDiscount(product.id))}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-1">{product.price * product.quantity}</td>
                  <td className="text-red-500 p-1">
                    <AiOutlineDelete
                      onClick={() => handleRemove(product.id)}
                      className="cursor-pointer"
                    />
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
