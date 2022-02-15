import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignInPage";
import SignUp from "./components/SignUpPage";

import { useContext } from "react";
import { Store } from "./Store";
import CartPage from "./components/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingPage from "./components/ShippingPage";
import PaymentPage from "./components/PaymentPage";
import PlaceOrderPage from "./components/PlaceOrderPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container style={{ position: fixed }}">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="style={{position:fixed}}">
          <NavBar />
        </header>
        <main>
          <div className="">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />}></Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />

              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
