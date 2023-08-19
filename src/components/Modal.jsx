import { Fragment, useCallback, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { onHoldToActiveCart } from "../app/cartSlice";
import { removeFromHold, resetOnHold } from "../app/onHoldSlicer";

const Modal = ({ open, setOpen }) => {
  
  const dispatch = useDispatch();

  const onHoldProducts = useSelector((state) => state.onHoldReducer);

  const cancelButtonRef = useRef(null);

  const handleEdit = useCallback((products)=>{
    dispatch(onHoldToActiveCart(products));
    setOpen(false);
    dispatch(resetOnHold());
  },[dispatch,setOpen])

  const handleDelete = useCallback((id)=>{
    dispatch(removeFromHold(id))
  },[dispatch])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 text-center"
                      >
                        Drafts Orders
                      </Dialog.Title>
                      <div className="mt-2 w-[430px]">
                        <div className="flex justify-between gap-2 text-center pb-2 font-medium">
                          <p className="w-1/4">Date</p>
                          <p className="w-1/4">Name</p>
                          <p className="w-1/4">Order Price</p>
                          <p className="w-1/4">Actions</p>
                        </div>
                        {onHoldProducts.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between gap-2 text-center pb-1"
                          >
                            <p className="text-sm w-1/4">{item.date}</p>
                            <p className="text-sm w-1/4">{item.name}</p>
                            <p className="text-sm w-1/4">
                              {item.totalOrder.toFixed(2)}
                            </p>
                            <p className="text-sm flex justify-center gap-2 w-1/4">
                              <AiOutlineEdit
                                onClick={()=>handleEdit(item.cartProducts)}
                                size={20}
                                className="
                                  cursor-pointer 
                                  hover:text-green-600 
                                  transition-all 
                                  transform 
                                  hover:scale-125
                                  "
                              />
                              <MdOutlineDeleteOutline
                                onClick={()=>handleDelete(item.id)}
                                size={20}
                                className="
                                  cursor-pointer 
                                  hover:text-red-600 
                                  transition-all 
                                  transform 
                                  hover:scale-125
                                  "
                              />
                            </p>
                          </div>
                        ))}

                        {onHoldProducts && onHoldProducts.length === 0 && (
                          <div className="text-slate-400 text-center text-sm">
                            No Products In On Hold
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
