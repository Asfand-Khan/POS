import Product from './Product';

const Products = ({products,searchResults}) => {
  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
        {
          searchResults.length === 0 ? (
            products.map(product => (
                <Product key={product.id} product={product}/>
            ))) : (
              searchResults.map(product => (
                <Product key={product.id} product={product}/>
            ))
            )
        }
    </div>
  )
}

export default Products