const DisplayItem = ({title,value,isRed,isSelectBox,isDisc}) => {
  return (
    <div className={`flex justify-between m-1 border-[1px] border-zinc-300 rounded-sm px-1 ${isRed ? "items-center":""} ${isSelectBox ? "items-center":""}  ${isDisc ? "items-center":""}`}>
      <span className="text-zinc-700 font-medium text-sm">{title} :</span>
      {isSelectBox ? (
        <select className="font-normal text-sm focus:outline-none p-1 border-[1px] border-zinc-300 m-1 rounded-sm">
            <option>Cash</option>
            <option>Other</option>
            <option>Return</option>
        </select>
      ) : (
      isDisc ? (
        <input type="text" value={value} className="border-[1px] border-zinc-300 px-1 h-fit w-[20%] rounded-sm m-1" />
      ) :(
        <span className={`${isRed ? "text-red-600 text-md font-semibold":"font-normal text-sm text-zinc-500"} `}>{isRed ? `RS. ${value}`:`${value}`}</span>
      )
      ) }
    </div>
  );
};

export default DisplayItem;
