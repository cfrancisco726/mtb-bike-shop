import data from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">mtb bike shop</a>
      </header>
      <main>
        <h1>Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img
                  className="bike-photo"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>{product.brand}</p>
                <p>${product.price}</p>
                <p>{product.year}</p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
