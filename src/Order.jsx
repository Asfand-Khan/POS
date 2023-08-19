import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Order = () => {
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const from = searchParams[0].get("from");

  // const products = JSON.parse(localStorage.getItem("cart"));
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (from !== "main") {
      navigate("/");
    }

    handlePrint()
  }, [from, navigate, handlePrint]);

  function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1; // Months start at 0!
    let day = date.getDate();

    // Pad the day and month with leading zeros if necessary.
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month}/${year}`;
  }

  const date = new Date();
  const formattedDate = formatDate(date);

  return (
    <>
      {/* <button onClick={handlePrint}>Print</button> */}
      <div
        className="max-w-[300px] p-3 shadow-xl flex flex-col items-center justify-center"
        ref={componentRef}
      >
        {/* company info */}
        <div className="w-full flex flex-col items-center justify-center text-sm font-medium">
          <h2>Boxygen</h2>
          <h4>Default</h4>
          <p>TIN :</p>
        </div>
        {/* heading */}
        <div className="text-center font-bold text-lg my-3 border-y-2 border-dashed border-black w-full">
          <p>SALES INVOICE</p>
        </div>
        <div className="flex flex-col w-full px-4 text-xs font-semibold">
          <div className="flex flex-row justify-between">
            <p>Receipt No #</p>
            <p>3</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Date</p>
            <p>{formattedDate}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Customer</p>
            <p>Asfand</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Cashier</p>
            <p>Boxygen</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Payment Type</p>
            <p>Cash</p>
          </div>
        </div>
        {/* Header */}
        <div className="text-center text-sm font-semibold my-1 border-y-2 border-dashed border-black w-full flex flex-row justify-between">
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
          <p>Disc</p>
          <p>Total</p>
        </div>
        {/* Item */}
        <div className="w-full flex flex-col text-[11px] my-1 border-b-2 border-dashed border-black pb-1">
          <div className="flex flex-row justify-between">
            <p>Computer</p>
            <p>1</p>
            <p>1,000.00</p>
            <p>0%</p>
            <p>1,000.00</p>
          </div>
        </div>
        {/* totals */}
        <div className="flex flex-col items-end w-full text-xs font-semibold">
          <div className="flex flex-row justify-between w-3/4">
            <p>Subtotal (Excl) :</p>
            <p>Rs. 1,000.00</p>
          </div>
          <div className="flex flex-row justify-between w-3/4">
            <p>Grandtotal (Incl) :</p>
            <p>Rs. 1,000.00</p>
          </div>
          <div className="flex flex-row justify-between w-3/4">
            <p>Cash Tendered :</p>
            <p>Rs. 1,000.00</p>
          </div>
          <div className="flex flex-row justify-between w-3/4">
            <p>Subtotal (Excl) :</p>
            <p>Rs. 1,000.00</p>
          </div>
          <div className="flex flex-row justify-between w-3/4">
            <p>Change :</p>
            <p>Rs. 0.00</p>
          </div>
        </div>
        {/* regards */}
        <div className="text-center text-xs font-bold w-full mt-2">
          <p>Thank You For Your Business!</p>
        </div>
      </div>
    </>
  );
};

export default Order;
