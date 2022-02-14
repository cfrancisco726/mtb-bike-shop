import React, { useEffect, useContext, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "Paypal"
  );
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <>
      <Container>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="small-container">
          <Helmet>
            <title>Payment Method</title>
          </Helmet>
          <h1 className="my-3">Payment Method</h1>
          <Form onSubmit={submitHandler}>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Paypal"
                label="Paypal"
                value="Paypal"
                checked={paymentMethodName === "Paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Stripe"
                label="Stripe"
                value="Stripe"
                checked={paymentMethodName === "Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Button type="submit">Continue</Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}
