import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Helmet } from "react-helmet-async";
import hero from "../hero/hero.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Landing() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      // setProducts(results.data);
    };
    fetchData();
  }, []);
  return (
    <div className="landing-container">
      <div className="hero">
        <figure className="position-relative">
          <img alt="" src={hero} className="hero" />{" "}
          <div className="landing-text-container">
            <figcaption className="lh-1">TOUGH TERRAIN</figcaption>
            <figcaption className="lh-2">
              <strong>MOUNTAIN BIKING</strong>
              <p>
                We hand select our bikes to stand up to the most rugged
                mountains. Adventure is in our DNA.
              </p>
              <div className="btn-container-hero">
                <Button className="collection-btn text-white btn-lg p-3 fs-5">
                  VIEW OUR COLLECTION
                </Button>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <Helmet>
        <title>MTB bike shop</title>
      </Helmet>
      <Container className="landing-container text-center text-primary mt-3 ">
        {" "}
        <h3>OUR PREMIUM BIKES</h3>
      </Container>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Container className="products">
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Landing;
