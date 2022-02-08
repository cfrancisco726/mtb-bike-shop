import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignInPage";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartPage from "./components/CartPage";

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  console.log("app", cart);
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>MTB-Bike-Shop</NavBar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce(
                        (total, current) => total + current.quantity,
                        0
                      )}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />}></Route>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">footer</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
