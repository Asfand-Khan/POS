import SearchBar from './SearchBar';
import CategoriesDropdown from './CategoriesDropdown';
import Products from './Products';

const ProductListing = ({products,isLoading}) => {
  const categories = [...new Set(products.map(product => product.category))];
  return (
    <section className="bg-zinc-200 rounded-sm p-2 overflow-auto h-[96vh] w-[40vw]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <SearchBar/>
            <CategoriesDropdown categories={categories}/>
        </div>
        {
          isLoading ? (
            <div className='text-center py-2 text-zinc-400'>
              Please Wait. While we are loading your products....
            </div>
          ):(<Products products={products}/>)
        }
    </section>
  )
}

export default ProductListing