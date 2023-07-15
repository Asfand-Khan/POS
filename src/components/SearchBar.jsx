import {CiSearch} from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="px-2 font-light text-sm border-[1px] border-slate-300 rounded-sm flex items-center bg-white">
      <CiSearch size={22} className='text-slate-300'/>
      <input placeholder="Type Your Product Name" type="text" className="w-full focus:outline-none p-2"/>
    </div>
  )
}

export default SearchBar