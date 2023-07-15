import DisplayButton from "./DisplayButton";
import DisplayItem from "./DisplayItem";

const Display = () => {
  return (
    <section className="m-1 border-[1px] border-zinc-300 p-1 rounded-sm">
      <div className="flex gap-1">
        <div className="border-[1px] border-zinc-300 rounded-sm w-full">
          <DisplayItem title="No. of Items" value={1} />
          <DisplayItem title="Total Count" value={1} />
          <DisplayItem title="Total Count" isSelectBox />
        </div>
        <div className="border-[1px] border-zinc-300 rounded-sm w-full">
          <DisplayItem title="Taxable Amnt" value={100} />
          <DisplayItem title="Tax (Incl.)" value={0.0} />
          <DisplayItem title="Discount" value={0.0} isDisc />
          <DisplayItem title="Total Order" value={100} isRed />
        </div>
      </div>
      <div className="border-[1px] border-zinc-300 rounded-sm mt-2 p-2 flex gap-2 justify-around">
        <DisplayButton
          label="Cancel"
          onclick={() => {}}
          color="bg-orange-300"
        />
        <DisplayButton
          label="Hold"
          onclick={() => {}}
          color="bg-zinc-400"
        />
        <DisplayButton
          label="Pay"
          onclick={() => {}}
          color="bg-blue-500"
        />
        <DisplayButton
          label="Card"
          onclick={() => {}}
          color="bg-blue-500"
        />
      </div>
    </section>
  );
};

export default Display;
