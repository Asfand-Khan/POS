import Product from './Product';

const Products = ({products}) => {
  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {
            products.map(product => (
                <Product key={product.name} product={product}/>
            ))
        }
    </div>
  )
}

export default Products