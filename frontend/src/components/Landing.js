import data from "../data";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img
                className="bike-photo"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.brand}</p>
              <p>${product.price}</p>
              <p>{product.year}</p>
              <button>add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
