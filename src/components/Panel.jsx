import Display from "./Display"
import ItemsTable from "./ItemsTable"

const Panel = () => {
  return (
    <section className="border-[1px] border-slate-300 rounded-sm max-h-[96vh] w-[60vw] flex flex-col justify-between">
        <ItemsTable/>
        <Display/>
    </section>
  )
}

export default Panel