import React from "react";
import Hero from "../components/MainPage/Hero/Hero";
import BookingForm from "../components/OrderPage/BookingForm";
import Footer from "../components/Footer/Footer";
function bookingPage() {
  return (
    <div>
      <Hero></Hero>
      <BookingForm></BookingForm>
      <Footer></Footer>
    </div>
  );
}

export default bookingPage;
