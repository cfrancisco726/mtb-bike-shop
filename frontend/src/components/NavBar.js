import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../Store";
import logo from "../mtb_logo/mtb_logo@2x.png";

function NavBar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };

  return (
    <div>
      <Navbar
        bg="secondary"
        variant="light"
        style={{ padding: "10px 5.5%", height: "100%" }}
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top nav-img"
            />{" "}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse>
          <Navbar className="justify-content-end" style={{ width: "100%" }}>
            <Link to="/cart" className="nav-link text-white">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="info">
                  {cart.cartItems.reduce(
                    (total, current) => total + current.quantity,
                    0
                  )}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />

                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign in
              </Link>
            )}
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
