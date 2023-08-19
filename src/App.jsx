import Container from "./components/Container";
import ProductListing from "./components/ProductListing";
import Panel from "./components/Panel";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "./app/productsSlice";

const App = () => {
  const dispatch = useDispatch();
  const {data,isLoading,searchResults} = useSelector(state => state.productReducer);

  useEffect(()=>{
    // getting products from API -- DISPATCH
    dispatch(getProducts());
  },[dispatch])


  return (
    <Container>
      <main className="p-3 max-h-screen h-screen overflow-hidden">
        <div className="flex gap-2">
          <ProductListing products={data} isLoading={isLoading} searchResults={searchResults} />
          <Panel />
        </div>
      </main>
    </Container>
  );
};

export default App;
