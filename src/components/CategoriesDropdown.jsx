import { useDispatch, useSelector } from "react-redux";
import { filterProductsByCategory } from "../app/productsSlice";
import { useEffect } from "react";
import  { productCategories } from "../app/categorySlicer";

const CategoriesDropdown = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state=>state.categoryReducer);

  useEffect(()=>{
    dispatch(productCategories());
  },[dispatch])

  const handleOnChange = (e) =>{
    dispatch(filterProductsByCategory(e.target.value));
  }
  return (
    <div className="w-full">
      <select
      name="selectedCategory"
      className="w-full border-[1px] border-slate-300 rounded-sm p-2 font-light focus:outline-none text-slate-400 capitalize"
      onChange={(e)=>handleOnChange(e)}
      >
        <option value="all">All Categories</option>
        {data.length > 0 && (
          data.map((category) => (
            <option key={category} className="capitalize" value={category}>
              {category}
            </option>
          ))  
        )}
      </select>
    </div>
  )
}

export default CategoriesDropdown