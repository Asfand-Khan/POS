import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { searchProductsByName, resetSearchResults } from "../app/productsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);

    dispatch(searchProductsByName(searchQuery));

    if (searchQuery.length === 1) {
      dispatch(resetSearchResults());
    }
  };

  // console.log(searchQuery.length);

  return (
    <div className="px-2 font-light text-sm border-[1px] border-slate-300 rounded-sm flex items-center bg-white">
      <CiSearch size={22} className="text-slate-300" />
      <input
        value={searchQuery}
        placeholder="Type Your Product Name"
        type="text"
        className="w-full focus:outline-none p-2"
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};

export default SearchBar;
