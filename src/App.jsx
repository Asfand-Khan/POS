import Container from "./components/Container";
import ProductListing from "./components/ProductListing";
import Panel from "./components/Panel";

const App = () => {
  const productLists = [
    {
      name: "Computer",
      image:
        "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
    },
    {
      name: "MacBook M1",
      image:
        "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
    },
  ];

  return (
    <Container>
      <main className="p-3 max-h-screen h-screen overflow-hidden">
        <div className="flex gap-2">
          <ProductListing products={productLists} />
          <Panel />
        </div>
      </main>
    </Container>
  );
};

export default App;
