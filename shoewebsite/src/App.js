import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Payment from "./components/Payment";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import ScrollWrapper from "./ScrollWrapper";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import UserProfile from "./components/UserProfile";
import Shipping from "./components/Shipping";
import ConfirmOrder from "./components/ConfirmOrder";
import NotFound from "./components/Not Found/NotFound";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export default function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/stripeapikey"
    );
    console.log(data);
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <ScrollWrapper>
        <Navbar />
        <Elements
          stripe={loadStripe(
            "pk_test_51KnTM5SGyxdOZsx68PZCjricVqtFGU0FYniZI8sChTBdqAIvcoFj310KMfoMUrgtF5PAFsZ6QjULamKgXMKe3Q0400BmNggOjM"
          )}
        >
          <Routes>
            <Route path="/process/payment" element={<Payment />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/login/shipping" element={<Shipping />} />
            <Route path="/order/confirm" element={<ConfirmOrder />} />
            <Route
              element={
                window.location.pathname === "/process/payment"
                  ? null
                  : NotFound
              }
            />
          </Routes>
        </Elements>
        <Footer />
      </ScrollWrapper>
    </Router>
  );
}
