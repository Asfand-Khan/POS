const CategoriesDropdown = ({categories}) => {
  return (
    <div className="w-full">
      <select className="w-full border-[1px] border-slate-300 rounded-sm p-2 font-light focus:outline-none text-slate-400 capitalize">
        <option>All Categories</option>
        {categories.length > 0 && (
          categories.map((category) => (
            <option key={category} className="capitalize">
              {category}
            </option>
          ))  
        )}
      </select>
    </div>
  )
}

export default CategoriesDropdown